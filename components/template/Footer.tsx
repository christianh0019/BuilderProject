
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { SITE_CONFIG } from './config';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 font-sans">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

                    {/* Brand Col */}
                    <div>
                        <div className="inline-block mb-6 bg-white p-3 rounded-lg shadow-lg">
                            <img src="/images/template-logo.png" alt={SITE_CONFIG.name} className="h-12 w-auto" />
                        </div>
                        <p className="mb-6 leading-relaxed">
                            Serving {SITE_CONFIG.serviceAreas[0].name}, {SITE_CONFIG.serviceAreas[1].name}, and surrounding areas since {SITE_CONFIG.foundingYear}. We build quality custom homes tailored to your lifestyle and land.
                        </p>
                        <div className="flex gap-4">
                            <a href={SITE_CONFIG.socials.facebook} className="hover:text-white transition-colors"><Facebook size={24} /></a>
                            <a href={SITE_CONFIG.socials.instagram} className="hover:text-white transition-colors"><Instagram size={24} /></a>
                        </div>
                        <div className="mt-6">
                            <img src="/images/bbb-logo.png" alt="BBB Accredited Business" className="h-10 w-auto opacity-80" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest mb-6">Menu</h3>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                                <li key={item}>
                                    <span className="hover:text-[#2B70B6] transition-colors cursor-pointer">
                                        {item === 'Home' ? 'Home' : item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services (Silo Links) */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest mb-6">Services</h3>
                        <ul className="space-y-3">
                            {SITE_CONFIG.services.map((service) => (
                                <li key={service.path}>
                                    <span className="hover:text-[#2B70B6] transition-colors cursor-pointer">{service.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Locations (New Column) */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest mb-6">Service Areas</h3>
                        <ul className="space-y-3 text-sm">
                            {SITE_CONFIG.serviceAreas.map((area) => (
                                <li key={area.path}>
                                    <span className="hover:text-[#2B70B6] transition-colors cursor-pointer">{area.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <MapPin className="text-[#2B70B6] flex-shrink-0" />
                                <span>{SITE_CONFIG.contact.address.street}<br />{SITE_CONFIG.contact.address.city}, {SITE_CONFIG.contact.address.state} {SITE_CONFIG.contact.address.zip}</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="text-[#2B70B6] flex-shrink-0" />
                                <a href={SITE_CONFIG.contact.phoneHref} className="hover:text-white">{SITE_CONFIG.contact.phone}</a>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="text-[#2B70B6] flex-shrink-0" />
                                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-white">{SITE_CONFIG.contact.email}</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer">Sitemap</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
