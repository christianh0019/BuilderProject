import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Calendar, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-900 selection:bg-purple-200 selection:text-purple-900 pt-32 pb-20">
            <SEO
                title="Builder Insights & Marketing Strategy | BuilderProject Blog"
                description="Expert advice on marketing, sales, and growth for custom home builders and remodelers. Learn the strategies that are scaling builders to $10M+."
            />

            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <span className="inline-block py-2 px-6 rounded-full bg-purple-100 text-purple-700 text-sm font-bold tracking-widest uppercase mb-6">
                        Builder Insights
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-8 leading-tight">
                        The Playbook for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
                            Modern Builders.
                        </span>
                    </h1>
                    <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
                        Strategies, systems, and case studies to help you attract better clients and protect your margins.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[...blogPosts]
                        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                        .map((post) => (
                            <Link
                                key={post.id}
                                to={`/blog/${post.slug}`}
                                className="group flex flex-col items-start"
                            >
                                {/* Thumbnail Container */}
                                <div className="w-full aspect-video rounded-2xl overflow-hidden mb-6 relative shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                                    <img
                                        src={post.thumbnail}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>

                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                                            <Play fill="white" className="text-white ml-1" size={32} />
                                        </div>
                                    </div>
                                </div>

                                {/* Meta */}
                                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4 font-medium uppercase tracking-wide">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {post.date}
                                    </div>
                                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={14} />
                                        {post.readTime}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 leading-tight group-hover:text-purple-700 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <span className="mt-auto inline-flex items-center font-bold text-purple-700 group-hover:gap-2 transition-all">
                                    Read Article <ArrowRight size={20} className="ml-2" />
                                </span>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
