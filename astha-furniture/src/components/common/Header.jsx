import React, { useEffect, useState } from 'react'
import { Armchair, Bed, ChefHat, House, Mail, MessageCircle, Phone, ShoppingCart, Tag } from 'lucide-react';
const Header = () => {

    document.addEventListener('DOMContentLoaded', function () {
        const navbar = document.querySelector('.navbar');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

        // Navbar scroll effect
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        mobileMenuBtn.addEventListener('click', function () {
            const icon = mobileMenuBtn.querySelector('i');
            mobileMenu.classList.toggle('active');

            if (mobileMenu.classList.contains('active')) {
                mobileMenu.style.display = 'block';
                icon.className = 'fas fa-times';
            } else {
                mobileMenu.style.display = 'none';
                icon.className = 'fas fa-bars';
            }
        });

        // Smooth scrolling for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    mobileMenu.classList.remove('active');
                    mobileMenu.style.display = 'none';
                    mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
                }
            });
        })
    })

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-brand">
                    {/* <div className="brand-icon">
                        <i className="fas fa-home"></i>
                    </div> */}
                    <div className="brand-text">
                        <h1>astha</h1>
                        {/* <p>Furniture Studio</p> */}
                    </div>
                </div>

                <div className="nav-links">
                    <a href="#hero" className="nav-link"><House /> Home</a>
                    <a href="#living" className="nav-link"><Armchair /> Living</a>
                    <a href="#bedroom" className="nav-link"><Bed /> Bedroom</a>
                    <a href="#kitchen" className="nav-link"><ChefHat /> Kitchen</a>
                    <a href="#sale" className="nav-link"><Tag /> Sale</a>
                    <a href="#feedback" className="nav-link"><MessageCircle /> Feedback</a>
                    <a href="#contact" className="nav-link"><Mail /> Contact</a>
                </div>

                <div className="nav-actions">
                    <button className="btn btn-outline">
                        <Phone /> Call Now
                    </button>
                    <button className="btn btn-primary">
                        <ShoppingCart /> Shop Now</button>
                </div>

                <button className="mobile-menu-btn">
                    <i className="fas fa-bars"></i>
                </button>
            </div>

            <div className="mobile-menu">
                <a href="#hero" className="mobile-link"><House /> Home</a>
                <a href="#living" className="mobile-link"><Armchair /> Living</a>
                <a href="#bedroom" className="mobile-link"><Bed /> Bedroom</a>
                <a href="#kitchen" className="mobile-link"><ChefHat /> Kitchen</a>
                <a href="#sale" className="mobile-link"><Tag /> Sale</a>
                <a href="#feedback" className="mobile-link"><MessageCircle /> Feedback</a>
                <a href="#contact" className="mobile-link"><Mail /> Contact</a>
                <div className="mobile-actions">
                    <button className="btn btn-outline">Call</button>
                    <button className="btn btn-primary">Shop</button>
                </div>
            </div>
        </nav>
    )
}

export default Header;
