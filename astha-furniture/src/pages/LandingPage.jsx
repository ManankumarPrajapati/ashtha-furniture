import { Armchair, Award, Bed, ChefHat, Facebook, Heart, House, Instagram, Mail, MapPin, MoveLeft, MoveRight, Phone, Quote, Send, Shield, ShoppingBag, ShoppingCart, Star, Tags, Truck, Twitter, User, Youtube } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import SofaImage from '../assets/Images/SofaImage.jpg'
import hall from '../assets/Images/hall.jpg'
import bedroom from '../assets/Images/bedroom.jpg'
import bed from '../assets/Images/bed.jpg'
import kitchen from '../assets/Images/kitchen.jpg'
import dining from '../assets/Images/dining.jpg'
import sofa from '../assets/Images/sofa.jpg'
import Header from '../components/common/Header';

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

    const slides = [
        {
            name: "slide1",
            discountName: 'Up to 40% OFF',
            discountPara: 'Designer Bedroom Collection',
            title: 'Transform Your Living Space',
            description: 'Discover our exquisite range of handcrafted furniture that combines elegance with comfort. From modern minimalist to classic luxury.',
            extra: 'Free Delivery & Installation',
            image: SofaImage,
        },
        {
            name: "slide2",
            discountName: 'New Arrivals',
            discountPara: 'Luxury Living Series',
            title: 'Modern Comfort Redefined',
            description: 'Experience the perfect blend of contemporary design and unmatched comfort with our premium furniture collections.',
            extra: '24-Month Warranty',
            image: hall,
        },
        {
            name: "slide3",
            discountName: 'Limited Edition',
            discountPara: 'Designer Bedroom Collection',
            title: 'Sleep in Style & Comfort',
            description: 'Create your dream bedroom with our luxurious bed frames, wardrobes, and accessories designed for ultimate relaxation.',
            extra: 'Custom Sizing Available',
            image: bedroom,
        }
    ]; // replace with real data

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


    const showSlide = (index) => {
        setCurrentSlide(index);
    };


    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };


    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };


    // Wishlist toggle
    const toggleWishlist = (id) => {
        setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
    };


    // Add to cart
    const addToCart = (product) => {
        setCart((prev) => [...prev, product]);
        console.log("Added to cart:", product);
    };



    // Countdown
    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
    useEffect(() => {
        const target = Date.now() + 48 * 60 * 60 * 1000;
        const timer = setInterval(() => {
            const diff = target - Date.now();
            if (diff > 0) {
                setTimeLeft({
                    hours: Math.floor(diff / (1000 * 60 * 60)),
                    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((diff % (1000 * 60)) / 1000),
                });
            }
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <Header scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, servicesRef, contactRef }} />
            <div className="landing_page">
                <section id="hero" className="hero-slider" ref={homeRef}>
                    <div className="slider-container">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`slide ${currentSlide === index ? "active" : ""}`}
                            >
                                {/* {slide.name} */}
                                <img src={slide.image} alt="Premium Collection" />
                                <div className="slide-overlay"></div>
                                <div className="slide-content">
                                    <div className="offer-badge">
                                        <Star />
                                        <span>{slide.discountName}</span>
                                    </div>
                                    <p className="subtitle">{slide.discountPara}</p>
                                    <h1>{slide.title}</h1>
                                    <p className="description">{slide.description}</p>
                                    <div className="featured">
                                        <Star color='orange' />
                                        <span>{slide.extra}</span>
                                    </div>
                                    <div className="slide-actions">
                                        <button className="btn btn-luxury">
                                            <ShoppingBag /> Shop Collection
                                        </button>
                                        <button className="btn btn-outline-white">
                                            View Catalog <MoveRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="slider-btn prev-btn">
                        <MoveLeft />
                    </button>
                    <button className="slider-btn next-btn">
                        <MoveRight />
                    </button>

                    <div className="slider-dots">
                        <button className="dot active"></button>
                        <button className="dot"></button>
                        <button className="dot"></button>
                    </div>

                    <div className="slide-counter">01 / 03</div>
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
                                <Armchair />Living Room
                            </button>
                            <button className="filter-btn" data-category="bedroom">
                                <Bed /> Bedroom
                            </button>
                            <button className="filter-btn" data-category="kitchen">
                                <ChefHat /> Kitchen & Dining
                            </button>
                        </div>
                    </div>
                </section>

                <section className="services-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Why Choose <span className="luxury-text">astha</span></h2>
                        </div>

                        <div className="services-grid">
                            <div className="service-card">
                                <div className="service-icon">
                                    <Truck />
                                </div>
                                <h3>Free Delivery</h3>
                                <p>Free delivery on orders over $500. Fast and reliable shipping nationwide.</p>
                            </div>

                            <div className="service-card">
                                <div className="service-icon">
                                    <Shield />
                                </div>
                                <h3>2 Year Warranty</h3>
                                <p>Comprehensive warranty coverage on all furniture pieces for peace of mind.</p>
                            </div>

                            <div className="service-card">
                                <div className="service-icon">
                                    <Award />
                                </div>
                                <h3>Expert Craftsmanship</h3>
                                <p>Handcrafted by skilled artisans using premium materials and techniques.</p>
                            </div>

                            <div className="service-card">
                                <div className="service-icon">
                                    <User />
                                </div>
                                <h3>Design Consultation</h3>
                                <p>Free interior design consultation to help you create your perfect space.</p>
                            </div>
                        </div>
                    </div>
                </section>

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

                <section id="sale" className="sale-section" ref={aboutRef}>
                    <div className="sale-overlay"></div>
                    <div className="container">
                        <h2>MEGA SALE EVENT</h2>
                        <p>Up to 50% off on selected furniture pieces</p>

                        <div className="countdown">
                            <div className="countdown-item">
                                <div className="countdown-number">48</div>
                                <div className="countdown-label">Hours</div>
                            </div>
                            <div className="countdown-item">
                                <div className="countdown-number">12</div>
                                <div className="countdown-label">Minutes</div>
                            </div>
                            <div className="countdown-item">
                                <div className="countdown-number">35</div>
                                <div className="countdown-label">Seconds</div>
                            </div>
                        </div>

                        <button className="btn btn-sale">
                            <Tags /> Shop Sale Items
                        </button>
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

                <section className="brands-section">
                    <div className="container">
                        <h3>Trusted by Leading Brands</h3>
                        <div className="brands-grid">
                            <div className="brand">Herman Miller</div>
                            <div className="brand">West Elm</div>
                            <div className="brand">CB2</div>
                            <div className="brand">Restoration Hardware</div>
                            <div className="brand">Article</div>
                            <div className="brand">IKEA</div>
                            <div className="brand">Crate & Barrel</div>
                            <div className="brand">Pottery Barn</div>
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
