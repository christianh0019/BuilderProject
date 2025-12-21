import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const post = blogPosts.find((p) => p.slug === slug);

    useEffect(() => {
        if (!post) {
            navigate('/blog');
        }
        window.scrollTo(0, 0);
    }, [post, navigate]);

    if (!post) return null;

    // Extract Video ID for Embed
    const videoId = post.youtubeUrl.split('v=')[1];

    return (
        <div className="bg-white font-sans text-slate-900 selection:bg-purple-200 selection:text-purple-900 pt-32 pb-20">
            <SEO
                title={`${post.title} | BuilderProject`}
                description={post.excerpt}
            />

            {/* Progress Bar (Optional, simpler implementation) */}
            <div className="fixed top-0 left-0 w-full h-1 z-50">
                <div className="h-full bg-gradient-to-r from-purple-600 to-pink-600 w-0 opacity-0" id="scroll-progress"></div>
            </div>

            <article className="container mx-auto px-6 max-w-4xl">
                {/* Back Link */}
                <Link to="/blog" className="inline-flex items-center text-slate-500 hover:text-purple-700 font-bold mb-12 transition-colors group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Insights
                </Link>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-4 text-sm md:text-base text-slate-500 mb-6 font-medium uppercase tracking-wide">
                        <span className="text-purple-700 font-bold bg-purple-50 px-3 py-1 rounded-full">Strategy</span>
                        <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            {post.date}
                        </div>
                        <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                        <div className="flex items-center gap-1">
                            <Clock size={16} />
                            {post.readTime}
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8 leading-[1.1]">
                        {post.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                        {post.excerpt}
                    </p>
                </header>

                {/* YouTube Embed */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl mb-16 bg-slate-100">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                        title={post.title}
                        className="absolute top-0 left-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Content Body */}
                <div
                    className="prose prose-lg md:prose-xl max-w-none text-slate-700 prose-headings:font-serif prose-headings:font-bold prose-headings:text-slate-900 prose-p:leading-relaxed prose-a:text-purple-700 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 focus:outline-none"
                    dangerouslySetInnerHTML={{ __html: post.content as string }}
                >
                </div>

                {/* Share Section */}
                <div className="border-t border-slate-200 mt-20 pt-10 flex items-center justify-between">
                    <div className="font-serif font-bold text-xl text-slate-900">
                        Share this article
                    </div>
                    <div className="flex gap-4">
                        <button className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
                            <Share2 size={20} />
                        </button>
                    </div>
                </div>

                {/* Read Next Section */}
                <div className="mt-20 border-t border-slate-200 pt-16">
                    <p className="font-serif font-bold text-slate-500 mb-8 uppercase tracking-widest text-sm">Read This Next</p>
                    {(() => {
                        const currentIndex = blogPosts.findIndex(p => p.id === post.id);
                        const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length];

                        return (
                            <Link to={`/blog/${nextPost.slug}`} className="group block bg-slate-50 rounded-[2rem] p-4 md:p-8 hover:bg-slate-100 transition-colors border border-slate-100 items-center md:flex gap-8">
                                <div className="w-full md:w-1/3 aspect-video rounded-xl overflow-hidden shadow-lg mb-6 md:mb-0 relative">
                                    <img src={nextPost.thumbnail} alt={nextPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <div className="md:w-2/3">
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4 group-hover:text-purple-700 transition-colors">
                                        {nextPost.title}
                                    </h3>
                                    <p className="text-slate-600 mb-6 line-clamp-2">
                                        {nextPost.excerpt}
                                    </p>
                                    <span className="inline-flex items-center font-bold text-purple-700">
                                        Read Article <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </Link>
                        );
                    })()}
                </div>

            </article>
        </div>
    );
};

export default BlogPost;
