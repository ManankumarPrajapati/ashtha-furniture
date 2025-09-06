import { MoveRight, Star } from "lucide-react";
import React from "react";
import '../assets/scss/slider.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper/modules";

const TopRatedCollection = () => {

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
    ];

    return (
        <>
            <section className="section new-discover-container top_rated_container">
                {/* Header Section */}
                <div className="discover-header">
                    <div className="header-content">
                        <h2>Top-Rated by Indian Homes</h2>
                        <p>
                            Crafted to complement Indian lifestyles
                        </p>
                    </div>
                    <button className="view-all-btn">
                        View All <MoveRight />
                    </button>
                </div>

                {/* Cards Carousel */}
                <div className="cards-carousel">
                    <div className="carousel-wrapper">
                        <Swiper
                            effect="cube"
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={4}
                            spaceBetween={20}
                            navigation
                            centeredSlidesBounds={true}
                            autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
                            modules={[Navigation, Autoplay, EffectCoverflow]}
                            className="mySwiper"
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 }
                            }}
                        >
                            {cards.map((card, i) => (
                                <SwiperSlide className="card" key={i}>
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
                                        {/* <div className="card-price">
                                            <span className="current-price">{card.price}</span>
                                            <span className="original-price">{card.oldPrice}</span>
                                            <span className="discount">{card.discount}</span>
                                        </div> */}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div >
            </section >
        </>
    )
}

export default TopRatedCollection
