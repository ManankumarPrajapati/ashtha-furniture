import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-brand">
                            <div className="brand-text">
                                <h3>astha</h3>
                                <p>Furniture Studio</p>
                            </div>
                        </div>
                        <p>Transforming homes with premium furniture since 2010. Quality, style, and comfort in every piece.</p>
                        <div className="footer-social">
                            <a href="#"><Facebook /></a>
                            <a href="#"><Twitter /></a>
                            <a href="#"><Instagram /></a>
                            <a href="#"><Youtube /></a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#collections">Collections</a></li>
                            <li><a href="#bestsellers">Best Sellers</a></li>
                            <li><a href="#sale">Sale</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Categories</h4>
                        <ul>
                            <li><a href="#living">Living Room</a></li>
                            <li><a href="#bedroom">Bedroom</a></li>
                            <li><a href="#kitchen">Kitchen & Dining</a></li>
                            <li><a href="#">Office</a></li>
                            <li><a href="#">Outdoor</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Customer Service</h4>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Shipping Info</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Warranty</a></li>
                            <li><a href="#">Size Guide</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 astha. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
