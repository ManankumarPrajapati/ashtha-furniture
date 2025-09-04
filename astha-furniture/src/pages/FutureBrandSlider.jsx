import { MoveLeft, MoveRight, Star } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import '../assets/scss/slider.scss'
const FutureBrandSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsContainerRef = useRef(null);

    const cards = [
        {
            img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80",
            badge: "NEW",
            name: "Modern Comfort Sofa",
            stars: 4.5,
            reviews: 128,
            price: "$599.99",
            oldPrice: "$699.99",
            discount: "14% OFF",
        },
        {
            img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=500&q=80",
            badge: "TRENDING",
            name: "Minimalist Wooden Table",
            stars: 4.0,
            reviews: 86,
            price: "$299.99",
            oldPrice: "$349.99",
            discount: "14% OFF",
        },
        {
            img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=500&q=80",
            badge: "POPULAR",
            name: "Ergonomic Office Chair",
            stars: 4.8,
            reviews: 215,
            price: "$249.99",
            oldPrice: "$299.99",
            discount: "17% OFF",
        },
        {
            img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=500&q=80",
            badge: "NEW",
            name: "Compact Writing Desk",
            stars: 4.6,
            reviews: 142,
            price: "$199.99",
            oldPrice: "$249.99",
            discount: "20% OFF",
        },
        {
            img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=500&q=80",
            badge: "POPULAR",
            name: "Ergonomic Office Chair",
            stars: 4.8,
            reviews: 215,
            price: "$249.99",
            oldPrice: "$299.99",
            discount: "17% OFF",
        },
        {
            img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=500&q=80",
            badge: "NEW",
            name: "Compact Writing Desk",
            stars: 4.6,
            reviews: 142,
            price: "$199.99",
            oldPrice: "$249.99",
            discount: "20% OFF",
        },
    ];

    const cardsToShow = 4;
    const dots = Math.ceil(cards.length / cardsToShow);

    const updateCarousel = (index) => {
        if (!cardsContainerRef.current) return;
        const cardWidth =
            cardsContainerRef.current.firstChild.offsetWidth +
            parseInt(
                window.getComputedStyle(cardsContainerRef.current).gap || 0,
                10
            );
        cardsContainerRef.current.style.transform = `translateX(-${index * cardWidth}px)`;
        setCurrentIndex(index);
    };

    const next = () => {
        if (currentIndex < cards.length - cardsToShow) {
            updateCarousel(currentIndex + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            updateCarousel(currentIndex - 1);
        }
    };

    useEffect(() => {
        const handleResize = () => updateCarousel(currentIndex);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [currentIndex]);

    return (
        <div className="new-discover-container">
            {/* Header Section */}
            <div className="discover-header">
                <div className="header-content">
                    <h2>New Discoveries</h2>
                    <p>
                        Explore our latest collection of premium products designed to elevate
                        your lifestyle. Each item is carefully curated for quality and style.
                    </p>
                </div>
                <button className="view-all-btn">
                    View All <MoveRight />
                </button>
            </div>

            {/* Cards Carousel */}
            <div className="cards-carousel">
                <div className="carousel-wrapper">
                    <div className="cards-container" ref={cardsContainerRef}>
                        {cards.map((card, i) => (
                            <div className="card" key={i}>
                                <div className="card-img">
                                    <img src={card.img} alt={card.name} />
                                    <div className="card-badge">{card.badge}</div>
                                </div>
                                <div className="card-content">
                                    <h3 className="card-name">{card.name}</h3>
                                    <div className="card-rating">
                                        <div className="stars">
                                            {/* {[1, 2, 3, 4, 5].map((star, idx) => (
                                                <i
                                                    key={idx}
                                                    className={
                                                        star <= Math.floor(card.stars)
                                                            ? <Star />
                                                            : star - card.stars === 0.5
                                                                ? <Star />
                                                                : <Star />
                                                    }
                                                ></i>
                                            ))} */}
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                        <span className="rating-value">{card.stars}</span>
                                        <span className="reviews">({card.reviews} reviews)</span>
                                    </div>
                                    <div className="card-price">
                                        <span className="current-price">{card.price}</span>
                                        <span className="original-price">{card.oldPrice}</span>
                                        <span className="discount">{card.discount}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Carousel Controls */}
                <div className="carousel-controls">
                    <div className="carousel-btn prev" onClick={prev}>
                        <MoveLeft />
                    </div>
                    <div className="carousel-btn next" onClick={next}>
                        <MoveRight />
                    </div>
                </div>

                {/* Dots */}
                <div className="carousel-dots">
                    {Array.from({ length: dots }).map((_, i) => (
                        <div
                            key={i}
                            className={`dot ${Math.floor(currentIndex / cardsToShow) === i ? "active" : ""}`}
                            onClick={() => updateCarousel(i * cardsToShow)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FutureBrandSlider;
