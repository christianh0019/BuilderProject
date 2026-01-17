import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, X, Send, Sparkles, Loader2, Minimize2 } from 'lucide-react';
import { OpenAI } from 'openai';
import { siteContext } from '../data/siteContext';

// OpenAI Client safely initialized on demand

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const ChatWidget: React.FC = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: "Hi! I'm the BuilderProject AI. Ask me anything about our marketing systems for builders." }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async (text: string) => {
        if (!text.trim() || isLoading) return;

        const userMessage = text.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            // Safely initialize OpenAI client
            const apiKey = import.meta.env.VITE_OPENAI_API;

            if (!apiKey) {
                throw new Error("API Key configuration missing");
            }

            const openai = new OpenAI({
                apiKey: apiKey,
                dangerouslyAllowBrowser: true,
            });

            const completion = await openai.chat.completions.create({
                messages: [
                    { role: 'system', content: siteContext },
                    ...messages.map(m => ({ role: m.role, content: m.content })),
                    { role: 'user', content: userMessage }
                ],
                model: 'gpt-4o',
            });

            const aiResponse = completion.choices[0]?.message?.content || "I'm sorry, I couldn't process that request.";
            setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
        } catch (error) {
            console.error('Error calling OpenAI:', error);
            const errorMessage = error instanceof Error && error.message === "API Key configuration missing"
                ? "I'm currently undergoing maintenance. Please try again later."
                : "Sorry, I'm having trouble connecting right now. Please try again later.";

            setMessages(prev => [...prev, { role: 'assistant', content: errorMessage }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        handleSend(input);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans">
            {/* Launcher Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="group flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 relative"
                >
                    <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <MessageCircle size={32} className="text-white" />
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
                    </span>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="bg-white w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] rounded-3xl shadow-2xl flex flex-col border border-slate-100 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
                    {/* Header */}
                    <div className="bg-slate-900 p-4 flex justify-between items-center text-white shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                <Sparkles size={20} className="text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">BuilderProject Assistant</h3>
                                <p className="text-xs text-slate-400 flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span> Online
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <Minimize2 size={20} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 scroll-smooth">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${message.role === 'user'
                                        ? 'bg-purple-600 text-white rounded-br-none'
                                        : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none'
                                        }`}
                                >
                                    {(() => {
                                        const actionMatch = message.content.match(/\|\|ACTION:(.*?)\|(.*?)\|\|/);
                                        if (actionMatch) {
                                            const [fullMatch, url, label] = actionMatch;
                                            const cleanContent = message.content.replace(fullMatch, '').trim();
                                            return (
                                                <div className="flex flex-col gap-3">
                                                    <span>{cleanContent}</span>
                                                    <button
                                                        onClick={() => {
                                                            if (url.startsWith('http')) {
                                                                window.open(url, '_blank');
                                                            } else {
                                                                navigate(url);
                                                                setIsOpen(false); // Optional: close chat on navigation? Maybe better to keep open or minimize. Let's just navigate for now, user can close. 
                                                                // Actually, usually beneficial to close or minimize on mobile, but on desktop maybe leave open. 
                                                                // Let's just navigate.
                                                            }
                                                        }}
                                                        className="self-start text-xs font-bold bg-white text-purple-600 border border-purple-200 px-4 py-2 rounded-full hover:bg-purple-50 transition-colors shadow-sm flex items-center gap-1 group"
                                                    >
                                                        {label}
                                                        <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                                                    </button>
                                                </div>
                                            );
                                        }
                                        return message.content;
                                    })()}
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-slate-200 shadow-sm">
                                    <Loader2 size={20} className="text-purple-600 animate-spin" />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Suggested Questions */}
                    {messages.length === 1 && (
                        <div className="px-4 pb-2 bg-slate-50 flex gap-2 flex-wrap">
                            {["How much does it cost?", "What is The Foundation?", "How do I get more leads?", "Do you work with remodelers?"].map((q, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleSend(q)}
                                    className="text-xs bg-white border border-purple-200 text-purple-700 px-3 py-1.5 rounded-full hover:bg-purple-50 transition-colors shadow-sm whitespace-nowrap"
                                >
                                    {q}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t border-slate-100 shrink-0">
                        <form onSubmit={handleSubmit} className="relative flex items-center">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about our services..."
                                className="w-full bg-slate-100 text-slate-900 rounded-full pl-5 pr-12 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:bg-white transition-all shadow-inner"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isLoading}
                                className="absolute right-2 p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 disabled:opacity-50 disabled:hover:bg-purple-600 transition-colors shadow-md"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                        <div className="text-center mt-2">
                            <a href="https://builderproject.co" target="_blank" rel="noreferrer" className="text-[10px] text-slate-400 font-medium hover:text-purple-500 transition-colors">
                                Powered by BuilderProject AI
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatWidget;
