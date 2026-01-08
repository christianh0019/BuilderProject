import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
            <SEO
                title="404 - Page Not Found"
                description="The page you're looking for doesn't exist."
            />
            <h1 className="text-9xl font-serif text-slate-200 font-bold mb-4">404</h1>
            <h2 className="text-3xl font-serif text-slate-900 font-bold mb-6">Page Not Found</h2>
            <p className="text-slate-600 max-w-md mb-10 text-lg">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link
                to="/"
                className="inline-block bg-slate-900 text-white font-bold px-8 py-3 rounded-full hover:bg-purple-600 transition-colors"
            >
                Return Home
            </Link>
        </div>
    );
};

export default NotFound;
