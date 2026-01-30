import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { SITE_CONFIG } from './config';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

    const navigation = [
        {
            name: 'Services',
            path: '/services',
            children: [
                { name: 'New Construction', path: '/services/new-construction' },
                { name: 'Remodeling', path: '/services/remodeling' },
                { name: 'Basement Finishing', path: '/services/basement-finishing' },
                { name: 'Additions', path: '/services/additions' },
            ]
        },
        {
            name: 'Locations',
            path: '/locations',
            children: [
                { name: 'Loveland', path: '/locations/loveland' },
                { name: 'Fort Collins', path: '/locations/fort-collins' },
                { name: 'Windsor', path: '/locations/windsor' },
                { name: 'Boulder', path: '/locations/boulder' },
                { name: 'Greeley', path: '/locations/greeley' },
                { name: 'Longmont', path: '/locations/longmont' },
                { name: 'Timnath', path: '/locations/timnath' },
                { name: 'Wellington', path: '/locations/wellington' },
                { name: 'Berthoud', path: '/locations/berthoud' },
                { name: 'Mead', path: '/locations/mead' },
                { name: 'Erie', path: '/locations/erie' },
            ]
        },
        { name: 'Pricing', path: '/resources/cost-guide-optin' },
        { name: 'Portfolio', path: '/portfolio' },
        {
            name: 'Resources',
            path: '/resources', // Updated to clickable parent page
            children: [
                { name: 'About Us', path: '/about' },
                { name: 'Our Process', path: '/process' },
                { name: 'Blog', path: '/blog' },
                { name: 'Partners', path: '/partners' },
                { name: 'Careers', path: '/careers' },
            ]
        },
    ];

    const toggleSubmenu = (name: string) => {
        setOpenSubmenu(openSubmenu === name ? null : name);
    };

    return (
        <header className="bg-white shadow-md sticky top-0 w-full z-50 font-sans">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex flex-col items-start gap-0.5 z-50">
                    <img src="/images/template-logo.png" alt={SITE_CONFIG.name} className="h-12 w-auto" />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden xl:flex items-center gap-8">
                    {navigation.map((item) => (
                        <div
                            key={item.name}
                            className="relative group h-full"
                        >
                            <span
                                className={`flex items-center gap-1 text-sm font-bold uppercase tracking-wide transition-colors py-4 text-slate-600 hover:text-[#2B70B6] cursor-pointer`}
                            >
                                {item.name}
                                {item.children && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                            </span>

                            {/* Dropdown Menu */}
                            {item.children && (
                                <div className="absolute top-full left-0 w-64 bg-white shadow-xl border-t-2 border-[#2B70B6] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-left">
                                    {item.children.map((child) => (
                                        <span
                                            key={child.name}
                                            className="block px-6 py-3 text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium text-sm border-b border-slate-50 last:border-none cursor-pointer"
                                        >
                                            {child.name}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <button
                        className="flex items-center gap-2 px-6 py-3 bg-[#2B70B6] text-white font-bold rounded-full hover:bg-slate-900 transition-colors text-sm uppercase tracking-widest"
                    >
                        Request A Discovery Call
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="xl:hidden text-slate-900 z-50 p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <div
                className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out xl:hidden flex flex-col pt-24 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full overflow-y-auto px-6 pb-10">
                    {navigation.map((item) => (
                        <div key={item.name} className="border-b border-slate-100 py-2">
                            <div className="flex items-center justify-between min-h-[44px]">
                                <span
                                    className="text-xl font-serif font-bold text-slate-900 block flex-grow py-2 cursor-pointer"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </span>
                                {item.children && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleSubmenu(item.name);
                                        }}
                                        className="p-3 text-slate-500 hover:bg-slate-50 rounded-full transition-colors -mr-2"
                                        aria-label="Toggle Submenu"
                                    >
                                        <ChevronDown
                                            size={20}
                                            className={`transition-transform duration-300 ${openSubmenu === item.name ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                )}
                            </div>

                            {/* Mobile Submenu Items */}
                            {item.children && (
                                <div className={`pl-4 space-y-2 mt-1 border-l-2 border-[#2B70B6]/20 overflow-hidden transition-all duration-300 ${openSubmenu === item.name ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                                    {item.children.map((child) => (
                                        <span
                                            key={child.name}
                                            className="block text-slate-600 font-medium py-2 cursor-pointer"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {child.name}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="mt-8 space-y-4">
                        <button
                            className="block text-center w-full bg-[#2B70B6] text-white py-4 font-bold uppercase tracking-widest rounded-full"
                            onClick={() => setIsOpen(false)}
                        >
                            Request A Discovery Call
                        </button>
                        <a
                            href={SITE_CONFIG.contact.phoneHref}
                            className="flex items-center justify-center gap-2 w-full border-2 border-slate-900 text-slate-900 py-4 font-bold uppercase tracking-widest rounded-sm"
                        >
                            <Phone size={20} />
                            Call Now
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
