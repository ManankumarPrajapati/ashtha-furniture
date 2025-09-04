import React, { useState } from 'react'
import {
    Home,
    ShoppingCart,
    Laptop,
    Briefcase,
    Newspaper,
    Users,
    Phone,
    Book,
    Wrench,
    BarChart3,
    Settings,
    User,
    ArrowRight,
    Rocket,
} from "lucide-react";
import '../assets/scss/heroSection.scss'

const tabsData = [
    { label: "Sofas", icon: <Home size={18} /> },
    { label: "Living", icon: <ShoppingCart size={18} /> },
    { label: "Bedroom", icon: <Laptop size={18} /> },
    { label: "Mattress", icon: <Briefcase size={18} /> },
    { label: "Dining", icon: <Newspaper size={18} /> },
    { label: "Storage", icon: <Users size={18} /> },
    { label: "Study & Office", icon: <Phone size={18} /> },
    { label: "Outdoor & Balcony", icon: <Book size={18} /> },
    { label: "Furnishings", icon: <Wrench size={18} /> },
    { label: "Lighting & Decor", icon: <BarChart3 size={18} /> },
    { label: "Modular", icon: <Settings size={18} /> },
    { label: "WS Luxe", icon: <User size={18} /> },
];

const HeroSection = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="container">
            <div
                className="tabs-container"
            >
                <div className="tabs">
                    {tabsData.map((tab) => (
                        <div
                            key={tab.label}
                            className={`tab ${activeTab === tab.label ? "active" : ""}`}
                            onMouseEnter={() => { setShowMenu(true); setActiveTab(tab.label) }}
                            onMouseLeave={() => setShowMenu(false)}
                        >
                            {/* {tab.icon} */}
                            {tab.label}
                        </div>
                    ))}

                    <div className={`mega-menu ${showMenu ? "show" : ""}`}>
                        <div className="sub-menus">
                            <div className="sub-menu">
                                <h3>Products</h3>
                                <ul>
                                    <li><a href="#"><ArrowRight size={14} /> Web Applications</a></li>
                                    <li><a href="#"><ArrowRight size={14} /> Mobile Apps</a></li>
                                    <li><a href="#"><ArrowRight size={14} /> Desktop Software</a></li>
                                    <li><a href="#"><ArrowRight size={14} /> Cloud Solutions</a></li>
                                    <li><a href="#"><ArrowRight size={14} /> API Integrations</a></li>
                                </ul>
                            </div>

                            <div className="sub-menu">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="#"><ArrowRight size={14} /> UI/UX Design</a></li>
                                    <li><a href="#"><ArrowRight size={14} /> Web Development</a></li>
                                    <li><a href="#"><ArrowRight size={14} /> Mobile Development</a></li>
                                    <li><a href="#"><ArrowRight size={14} /> Cloud Hosting</a></li>
                                    <li><a href="#"><ArrowRight size={14} /> Maintenance & Support</a></li>
                                </ul>
                            </div>

                            <div className="sub-menu">
                                <h3>Resources</h3>
                                <ul>
                                    <li><a href="#"><ArrowRight size={14} /> Documentation</a></li>
                                    <li><a href="#"><ArrowRight size={14} /> Tutorials</a></li>
                                    <li><a href="#"><ArrowRight size={14} /> Blog</a></li>
                                    <li><a href="#"><ArrowRight size={14} /> Case Studies</a></li>
                                    <li><a href="#"><ArrowRight size={14} /> Webinars</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="menu-content">
                            <div className="vector-image">
                                <Rocket size={40} />
                                <h3>Boost Your Productivity</h3>
                                <p>
                                    Our solutions are designed to help you work smarter, not harder.
                                    Explore our tools to streamline your workflow.
                                </p>
                                <a href="#" className="btn">Explore Features</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
