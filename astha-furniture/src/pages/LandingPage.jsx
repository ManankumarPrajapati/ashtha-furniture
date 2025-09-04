import { Armchair, Award, Bed, ChefHat, Facebook, Heart, House, Instagram, Mail, MapPin, MoveLeft, MoveRight, Phone, Quote, Send, Shield, ShoppingBag, ShoppingCart, Star, Tags, Truck, Twitter, User, Youtube } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import SofaImage from '../assets/Images/SofaImage.jpg'
import hall from '../assets/Images/hall.jpg'
import bedroom from '../assets/Images/bedroom.jpg'
import bed from '../assets/Images/bed.jpg'
import kitchen from '../assets/Images/kitchen.jpg'
import summerSale from '../assets/Images/LandingPage/mattress-online.png'
import dining from '../assets/Images/dining.jpg'
import sofa from '../assets/Images/sofa.jpg'
import advertiseImage from '../assets/Images/LandingPage/discount-strip-1.jpg'
import Header from '../components/common/Header';
import HeroSection from './HeroSection';
import ShopByCategory from './ShopByCategory';
import '../assets/scss/heroSection.scss'
import { RotateCcw, Headset } from "lucide-react";
import FurnitureSlider from './FurnitureSlider';
import FutureBrandSlider from './FutureBrandSlider';

const LandingPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [wishlist, setWishlist] = useState({});
    const [cart, setCart] = useState([]);
    const [filter, setFilter] = useState("all");
    const slideIntervalRef = useRef(null);
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (elementRef) => {
        const headerOffset = 70; // adjust for sticky navbar
        const elementPosition = elementRef.current.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
            block: 'nearest'
        });
    };

    // Auto slide logic
    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
    }, [currentSlide]);


    const startAutoSlide = () => {
        stopAutoSlide();
        slideIntervalRef.current = setInterval(() => {
            nextSlide();
        }, 5000);
    };


    const stopAutoSlide = () => {
        if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
    };

    const slidesData = [
        {
            id: 1,
            tag: "NEW COLLECTION",
            title: "Modern Living Room Sets",
            desc: "Elevate your home with our premium furniture collection designed for comfort and style.",
            img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 2,
            tag: "LIMITED TIME",
            title: "Premium Sofa Collection",
            desc: "Experience unmatched comfort with our handcrafted sofas made from sustainable materials.",
            img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 3,
            tag: "BEST SELLER",
            title: "Minimalist Dining Experience",
            desc: "Create the perfect dining space with our elegant and functional furniture pieces.",
            img: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
    ];


    // Auto slide every 5s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slidesData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slidesData.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
    };

    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    useEffect(() => {
        // Set the date we're counting down to (3 days from now)
        const countDownDate = new Date();
        countDownDate.setDate(countDownDate.getDate() + 3);

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            if (distance <= 0) {
                clearInterval(timer);
                setTimeLeft({
                    days: "00",
                    hours: "00",
                    minutes: "00",
                    seconds: "00",
                });
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({
                days: days.toString().padStart(2, "0"),
                hours: hours.toString().padStart(2, "0"),
                minutes: minutes.toString().padStart(2, "0"),
                seconds: seconds.toString().padStart(2, "0"),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);


    return (
        <>
            <Header scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, servicesRef, contactRef }} />
            <div className="landing_page">
                <HeroSection />

                <div className="hero-container">
                    {/* Left Side - Slider */}
                    <div className="slider-container">
                        <div className="slider">
                            {slidesData.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className={`slide ${index === currentSlide ? "active" : ""}`}
                                    style={{ backgroundImage: `url(${slide.img})` }}
                                >
                                    <div className="slide-content">
                                        <span className="tag">{slide.tag}</span>
                                        <h2>{slide.title}</h2>
                                        <p>{slide.desc}</p>
                                        <a href="#" className="btn btn-outline">
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <div className="slider-nav">
                            <button onClick={prevSlide}>
                                <MoveLeft />
                            </button>
                            <button onClick={nextSlide}>
                                <MoveRight />
                            </button>
                        </div>

                        {/* Dots */}
                        <div className="slider-controls">
                            {slidesData.map((_, index) => (
                                <button
                                    key={index}
                                    className={index === currentSlide ? "active" : ""}
                                    onClick={() => setCurrentSlide(index)}
                                ></button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="right-side">
                        <div className="product-showcase">
                            <img src={SofaImage} alt="" />
                            <div className="showcase-content">
                                <h3>Summer Sale</h3>
                                <p>Get up to 40% off on selected items. Limited time offer - don't miss out!</p>
                                <a href="#" className="btn btn-primary">Explore Deals</a>
                            </div>
                        </div>

                        <div className="product-showcase">
                            <img src={summerSale} alt="Premium Collection" />
                            <div className="showcase-content">
                                <h3>Handcrafted Excellence</h3>
                                <p>Discover our artisan collection</p>
                            </div>
                        </div>
                    </div>
                </div>

                <section className='advertisement-section'>
                    <div className="sale-section">
                        <h2 className="sale-heading">Sale Ends In</h2>
                        <div className="timer">
                            <div className="timer-unit">
                                <div className="timer-value">{timeLeft.days}</div>
                                <div className="timer-label">Days</div>
                            </div>
                            <div className="timer-unit">
                                <div className="timer-value">{timeLeft.hours}</div>
                                <div className="timer-label">Hours</div>
                            </div>
                            <div className="timer-unit">
                                <div className="timer-value">{timeLeft.minutes}</div>
                                <div className="timer-label">Minutes</div>
                            </div>
                            <div className="timer-unit">
                                <div className="timer-value">{timeLeft.seconds}</div>
                                <div className="timer-label">Seconds</div>
                            </div>
                        </div>
                    </div>
                    <div className="why-choose-section">
                        <div className="features-grid">
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <Truck size={32} />
                                </div>
                                <p className="feature-title">Free Shipping</p>
                            </div>

                            <div className="feature-box">
                                <div className="feature-icon">
                                    <Shield size={32} />
                                </div>
                                <p className="feature-title">Secure Payment</p>
                            </div>

                            <div className="feature-box">
                                <div className="feature-icon">
                                    <RotateCcw size={32} />
                                </div>
                                <p className="feature-title">Easy Returns</p>
                            </div>

                            <div className="feature-box">
                                <div className="feature-icon">
                                    <Headset size={32} />
                                </div>
                                <p className="feature-title">24/7 Support</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='advertisement-section'>
                    <img src={advertiseImage} alt="" style={{ width: '100%' }} />
                </section>
                <section className="categories-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Shop by <span className="luxury-text">Category</span></h2>
                            <p>Discover our curated furniture collections designed for every room in your home</p>
                        </div>

                        <div className="category-filters">
                            <button className="filter-btn active" data-category="all">
                                <House /> All Categories
                            </button>
                            <button className="filter-btn" data-category="living">
                                <Armchair />Living
                            </button>
                            <button className="filter-btn" data-category="bedroom">
                                <Bed /> Bedroom
                            </button>
                            <button className="filter-btn" data-category="kitchen">
                                <ChefHat /> Kitchen & Dining
                            </button>
                            <button className="filter-btn" data-category="mattress">
                                <Armchair />Mattress
                            </button>
                            <button className="filter-btn" data-category="decor">
                                <Armchair />Decor
                            </button>
                        </div>
                        <ShopByCategory />
                    </div>
                </section>

                <FurnitureSlider />

                <FutureBrandSlider />

                <section id="bestsellers" className="bestsellers-section">
                    <div className="container">
                        <div className="section-header">
                            <h2><span className="luxury-text">Best</span> Sellers</h2>
                            <p>Our most popular furniture pieces loved by customers worldwide</p>
                        </div>

                        <div className="products-grid">
                            <div className="product-card">
                                <div className="sale-badge">
                                    <Tags /> Sale
                                </div>
                                <div className="product-image">
                                    <img src={sofa} alt="Modern Sectional Sofa" />
                                    <div className="image-overlay"></div>
                                    <button className="quick-view-btn">Quick View</button>
                                </div>
                                <div className="product-info">
                                    <div className="product-header">
                                        <div>
                                            <h3>Modern Sectional Sofa</h3>
                                            <div className="rating">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <span>4.8 (234)</span>
                                            </div>
                                        </div>
                                        <button className="wishlist-btn">
                                            <Heart />
                                        </button>
                                    </div>
                                    <div className="product-footer">
                                        <div className="price">
                                            <span className="current-price">$1299</span>
                                            <span className="original-price">$1699</span>
                                        </div>
                                        <button className="btn btn-primary">
                                            <ShoppingCart /> Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="product-card">
                                <div className="sale-badge">
                                    <Tags /> Sale
                                </div>
                                <div className="product-image">
                                    <img src={dining} alt="Oak Dining Set" />
                                    <div className="image-overlay"></div>
                                    <button className="quick-view-btn">Quick View</button>
                                </div>
                                <div className="product-info">
                                    <div className="product-header">
                                        <div>
                                            <h3>Oak Dining Set</h3>
                                            <div className="rating">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <span>4.9 (156)</span>
                                            </div>
                                        </div>
                                        <button className="wishlist-btn">
                                            <Heart />
                                        </button>
                                    </div>
                                    <div className="product-footer">
                                        <div className="price">
                                            <span className="current-price">$899</span>
                                            <span className="original-price">$1199</span>
                                        </div>
                                        <button className="btn btn-primary">
                                            <ShoppingCart /> Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="product-card">
                                <div className="product-image">
                                    <img src={bed} alt="Luxury King Bed" />
                                    <div className="image-overlay"></div>
                                    <button className="quick-view-btn">Quick View</button>
                                </div>
                                <div className="product-info">
                                    <div className="product-header">
                                        <div>
                                            <h3>Luxury King Bed</h3>
                                            <div className="rating">
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <span>4.7 (89)</span>
                                            </div>
                                        </div>
                                        <button className="wishlist-btn">
                                            <Heart />
                                        </button>
                                    </div>
                                    <div className="product-footer">
                                        <div className="price">
                                            <span className="current-price">$1499</span>
                                        </div>
                                        <button className="btn btn-primary">
                                            <ShoppingCart /> Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-footer">
                            <button className="btn filter-btn">
                                View All Best Sellers <MoveRight />
                            </button>
                        </div>
                    </div>
                </section>

                <section id="collections" className="collections-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Explore Our <span className="gradient-text">Collections</span></h2>
                            <p>Complete furniture solutions for every room in your home</p>
                        </div>

                        <div className="collections-grid">
                            <div className="collection-card">
                                <div className="collection-image">
                                    <img src={sofa} alt="Luxury King Bed" />
                                    <div className="collection-overlay"></div>
                                    <div className="collection-info">
                                        <h3>Living Room</h3>
                                        <p>120 items</p>
                                    </div>
                                </div>
                                <div className="collection-content">
                                    <p>Comfortable sofas, chairs, and tables for relaxing spaces</p>
                                    <button className="btn btn-primary">
                                        Shop Living Room <MoveRight />
                                    </button>
                                </div>
                            </div>

                            <div className="collection-card">
                                <div className="collection-image">
                                    <img src={bed} alt="Luxury King Bed" />
                                    <div className="collection-overlay"></div>
                                    <div className="collection-info">
                                        <h3>Bedroom</h3>
                                        <p>85 items</p>
                                    </div>
                                </div>
                                <div className="collection-content">
                                    <p>Complete bedroom sets and individual pieces for restful sleep</p>
                                    <button className="btn btn-primary">
                                        Shop Bedroom <MoveRight />
                                    </button>
                                </div>
                            </div>

                            <div className="collection-card">
                                <div className="collection-image">
                                    <img src={kitchen} alt="Luxury King Bed" />
                                    <div className="collection-overlay"></div>
                                    <div className="collection-info">
                                        <h3>Kitchen & Dining</h3>
                                        <p>95 items</p>
                                    </div>
                                </div>
                                <div className="collection-content">
                                    <p>Dining tables, chairs, and kitchen storage solutions</p>
                                    <button className="btn btn-primary">
                                        Shop Kitchen & Dining <MoveRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="feedback" className="feedback-section" ref={servicesRef}>
                    <div className="container">
                        <div className="section-header">
                            <h2>What Our <span className="luxury-text">Customers</span> Say</h2>
                            <p>Read testimonials from our satisfied customers who transformed their homes</p>
                        </div>

                        <div className="testimonials-grid">
                            <div className="testimonial-card">
                                <Quote />
                                <p>"Astha has the most beautiful furniture collection. The quality is exceptional and the customer service is outstanding."</p>
                                <div className="rating">
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                </div>
                                <div className="testimonial-author">
                                    <div className="author-avatar">SJ</div>
                                    <div className="author-info">
                                        <p className="author-name">Sarah Johnson</p>
                                        <p className="author-role">Interior Designer</p>
                                    </div>
                                </div>
                            </div>

                            <div className="testimonial-card">
                                <Quote />
                                <p>"I furnished my entire living room with Astha. The delivery was prompt and the installation service was professional."</p>
                                <div className="rating">
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                </div>
                                <div className="testimonial-author">
                                    <div className="author-avatar">MC</div>
                                    <div className="author-info">
                                        <p className="author-name">Michael Chen</p>
                                        <p className="author-role">Homeowner</p>
                                    </div>
                                </div>
                            </div>

                            <div className="testimonial-card">
                                <Quote />
                                <p>"I recommend Astha to all my clients. Their furniture always helps properties sell faster with staged luxury."</p>
                                <div className="rating">
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                </div>
                                <div className="testimonial-author">
                                    <div className="author-avatar">ER</div>
                                    <div className="author-info">
                                        <p className="author-name">Emily Rodriguez</p>
                                        <p className="author-role">Real Estate Agent</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="newsletter-section" ref={contactRef}>
                    <div className="container">
                        <h2>Stay Updated with Latest Collections</h2>
                        <p>Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and design tips</p>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Enter your email" />
                            <button className="btn btn-subscribe">
                                <Send /> Subscribe
                            </button>
                        </div>
                    </div>
                </section>

                <section id="contact" className="contact-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Get in <span className="gradient-text">Touch</span></h2>
                            <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                        </div>

                        <div className="contact-content">
                            <div className="contact-info">
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <MapPin />
                                    </div>
                                    <div>
                                        <h4>Visit Our Showroom</h4>
                                        <p>123 Furniture Avenue, Design District, NY 10001</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <Phone />
                                    </div>
                                    <div>
                                        <h4>Call Us</h4>
                                        <p>+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <Mail />
                                    </div>
                                    <div>
                                        <h4>Email Us</h4>
                                        <p>hello@Astha.com</p>
                                    </div>
                                </div>

                                <div className="social-links">
                                    <a href="#"><Facebook /></a>
                                    <a href="#"><Twitter /></a>
                                    <a href="#"><Instagram /></a>
                                    <a href="#"><Youtube /></a>
                                </div>
                            </div>

                            <form className="contact-form">
                                <div className="form-row">
                                    <input type="text" placeholder="Your Name" required />
                                    <input type="email" placeholder="Your Email" required />
                                </div>
                                <div className="form-row">
                                    <input type="tel" placeholder="Your Phone" />
                                    <select required>
                                        <option value="">Select Service</option>
                                        <option value="consultation">Design Consultation</option>
                                        <option value="delivery">Delivery Info</option>
                                        <option value="warranty">Warranty Claim</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <textarea placeholder="Your Message" required></textarea>
                                <button type="submit" className="btn btn-primary">
                                    <Send /> Send Message
                                </button>
                            </form>
                        </div>
                    </div >
                </section >

            </div >


        </>
    )
}

export default LandingPage
