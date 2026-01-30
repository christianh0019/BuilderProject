
const TemplateShowcase = () => {
    return (
        <div className="relative w-full h-[4800px]">
            <iframe
                src="https://template-website-roan.vercel.app/"
                className="w-full h-full border-none"
                title="Template Preview"
                tabIndex={-1}
            />
            {/* Transparent overlay to block clicks but allow parent scrolling */}
            <div className="absolute inset-0 z-10 bg-transparent" />
        </div>
    );
};

export default TemplateShowcase;
