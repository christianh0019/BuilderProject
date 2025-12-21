import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical }) => {
    const siteTitle = "BuilderProject";
    const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
    const currentUrl = canonical || window.location.href;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:site_name" content={siteTitle} />
            {/* <meta property="og:image" content="/images/og-image.jpg" /> */}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            {/* <meta name="twitter:image" content="/images/og-image.jpg" /> */}
        </Helmet>
    );
};

export default SEO;
