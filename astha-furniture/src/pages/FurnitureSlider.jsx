import React, { useEffect, useState } from 'react'
import '../assets/scss/slider.scss'

const FurnitureSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const dots = [0, 1, 2]; // for 3 navigation dots

    const updateCarousel = (index) => {
        const carousel = document.querySelector(".carousel-container");
        const scrollPosition = index * (180 + 20); // width + gap
        carousel.scrollTo({
            left: scrollPosition,
            behavior: "smooth",
        });
        setCurrentIndex(index);
    };

    // Auto-rotate carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                const nextIndex = (prev + 1) % dots.length;
                updateCarousel(nextIndex);
                return nextIndex;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="future-brand-container">
            {/* Header Section */}
            <div className="header-section">
                <h2>Modern Furniture Collection</h2>
                <p>
                    Discover our premium range of ergonomic and aesthetically designed
                    furniture that combines comfort with style. Each piece is crafted with
                    attention to detail and built to last.
                </p>
            </div>

            {/* Image Carousel */}
            <div className="image-carousel">
                <div className="carousel-container">
                    {[
                        { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80", label: "Modern Sofa" },
                        { src: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=500&q=80", label: "Wooden Table" },
                        { src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=500&q=80", label: "Comfort Chair" },
                        { src: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=500&q=80", label: "Minimalist Desk" },
                        { src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=500&q=80", label: "Bookshelf" },
                        { src: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=500&q=80", label: "Cabinet" }
                    ].map((item, i) => (
                        <div className="image-box" key={i}>
                            <img src={item.src} alt={item.label} />
                            <div className="overlay">{item.label}</div>
                        </div>
                    ))}
                </div>
                <div className="carousel-nav">
                    {dots.map((dot, i) => (
                        <div
                            key={i}
                            className={`carousel-dot ${i === currentIndex ? "active" : ""}`}
                            onClick={() => updateCarousel(i)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FurnitureSlider
