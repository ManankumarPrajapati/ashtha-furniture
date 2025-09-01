import { Heart, MoveRight, ShoppingCart } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const ProductPage = () => {
    // Header scroll effect
    const productImages = [
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1558&q=80",
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=687&q=80",
    ];

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [zoomVisible, setZoomVisible] = useState(false);
    const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
    const [activeColor, setActiveColor] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");
    const [wishlist, setWishlist] = useState(false);

    // Header scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Image navigation
    const prevImage = () => {
        setCurrentImage((prev) =>
            prev === 0 ? productImages.length - 1 : prev - 1
        );
    };

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % productImages.length);
    };

    // Zoom effect
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setZoomPos({ x, y });
        setZoomVisible(true);
    };

    const lensSize = 150;
    return (
        <>
            <div class="breadcrumb">
                <div class="container">
                    <ul class="breadcrumb-items">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Living Room</a></li>
                        <li><a href="#">Sofas</a></li>
                        <li>Modern Luxury Sofa</li>
                    </ul>
                </div>
            </div>

            <section class="product-section">
                <div class="container product-container">
                    <div class="product-gallery">
                        <div class="main-image" id="mainImage">
                            <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Modern Luxury Sofa" id="mainProductImage" />
                            <div class="image-zoom-lens" id="zoomLens"></div>
                            <div class="zoomed-image" id="zoomedImage"></div>
                        </div>

                        <div class="gallery-controls">
                            <div class="gallery-btn" id="prevImage">
                                <i class="fas fa-chevron-left"></i>
                            </div>
                            <div class="gallery-btn" id="nextImage">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>

                        <div class="thumbnail-container">
                            <div class="thumbnail active" data-image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80">
                                <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Sofa Front View" />
                            </div>
                            <div class="thumbnail" data-image="https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80">
                                <img src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Sofa Side View" />
                            </div>
                            <div class="thumbnail" data-image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1558&q=80">
                                <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1558&q=80" alt="Sofa Back View" />
                            </div>
                            <div class="thumbnail" data-image="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">
                                <img src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Sofa Detail View" />
                            </div>
                        </div>
                    </div>

                    <div class="product-info">
                        <h1>Modern Luxury Sofa</h1>
                        <div class="product-prices">$1,299.99</div>

                        <div class="product-rating">
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <div class="rating-count">(42 reviews)</div>
                        </div>

                        <p class="product-description">
                            This luxurious sofa combines elegance with comfort. Featuring premium leather upholstery,
                            solid wood frame, and high-density foam cushions, it's designed to provide exceptional
                            comfort and durability. Perfect for modern living rooms.
                        </p>

                        <div class="product-options">
                            <div class="option-title">Color</div>
                            <div class="color-options">
                                <div class="color-option active" style={{ backgroundColor: "#2a2a2a" }} data-color="Charcoal"></div>
                                <div class="color-option" style={{ backgroundColor: "#c8a97e" }} data-color="Taupe"></div>
                                <div class="color-option" style={{ backgroundColor: "#6c757d" }} data-color="Slate Gray"></div>
                                <div class="color-option" style={{ backgroundColor: "#3a5f58" }} data-color="Forest Green"></div>
                            </div>

                            <div class="option-title">Quantity</div>
                            <div class="quantity-selector">
                                <button class="quantity-btn" id="decreaseQty">-</button>
                                <input type="number" class="quantity-input" id="quantity" value="1" min="1" />
                                <button class="quantity-btn" id="increaseQty">+</button>
                            </div>
                        </div>

                        <div class="action-buttons">
                            <a href="#" class="btn btn-primary"><ShoppingCart /> Add to Cart</a>
                            <a href="#" class="btn btn-outline">Buy Now <MoveRight /></a>
                            <div class="wishlist-btn">
                                <Heart />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="product-details">
                <div class="container">
                    <div class="details-tabs">
                        <div class="detail-tab active" data-tab="description">Description</div>
                        <div class="detail-tab" data-tab="specifications">Specifications</div>
                        <div class="detail-tab" data-tab="reviews">Reviews (42)</div>
                        <div class="detail-tab" data-tab="shipping">Shipping & Returns</div>
                    </div>

                    <div class="tab-content active" id="description">
                        <p>
                            The Modern Luxury Sofa is crafted with attention to detail and designed for both style and comfort.
                            The sofa features a sturdy kiln-dried hardwood frame that ensures long-lasting durability.
                            The cushions are filled with high-density foam and wrapped in soft fiber for optimal comfort.
                        </p>
                        <p>
                            Upholstered in top-grain leather, this sofa develops a beautiful patina over time. The deep seats
                            and angled backrest provide excellent support, making it perfect for relaxing or entertaining guests.
                            The tapered legs are made of solid wood with a dark finish, adding a touch of mid-century modern style.
                        </p>
                        <p>
                            Available in multiple colors to match your decor. Measures 84"W x 36"D x 32"H. Seat height is 18"
                            and seat depth is 22". Weight capacity: 750 lbs.
                        </p>
                    </div>

                    <div class="tab-content" id="specifications">
                        <div class="specs-grid">
                            <div class="spec-item">
                                <div class="spec-name">Dimensions</div>
                                <div class="spec-value">84"W x 36"D x 32"H</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-name">Seat Height</div>
                                <div class="spec-value">18"</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-name">Seat Depth</div>
                                <div class="spec-value">22"</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-name">Weight Capacity</div>
                                <div class="spec-value">750 lbs</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-name">Frame Material</div>
                                <div class="spec-value">Kiln-dried Hardwood</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-name">Upholstery</div>
                                <div class="spec-value">Top-grain Leather</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-name">Cushion Fill</div>
                                <div class="spec-value">High-density Foam</div>
                            </div>
                            <div class="spec-item">
                                <div class="spec-name">Leg Material</div>
                                <div class="spec-value">Solid Wood</div>
                            </div>
                        </div>
                    </div>

                    <div class="tab-content" id="reviews">
                        <div class="review">
                            <div class="review-header">
                                <div class="review-author">Sarah Johnson</div>
                                <div class="review-date">October 15, 2023</div>
                            </div>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <p>
                                This sofa is even more beautiful in person! The leather quality is exceptional and it's
                                incredibly comfortable. Delivery was prompt and the assembly was straightforward. Highly recommend!
                            </p>
                        </div>

                        <div class="review">
                            <div class="review-header">
                                <div class="review-author">Michael Thompson</div>
                                <div class="review-date">September 28, 2023</div>
                            </div>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <p>
                                Very pleased with this purchase. The sofa is sturdy and looks great in our living room.
                                The only reason I'm not giving 5 stars is because the cushions were a bit firmer than I expected,
                                but they're breaking in nicely.
                            </p>
                        </div>
                    </div>

                    <div class="tab-content" id="shipping">
                        <p>
                            We offer free standard shipping on all orders over $499. Standard delivery takes 5-7 business days.
                            Express shipping options are available at checkout.
                        </p>
                        <p>
                            White glove delivery and assembly service is available for an additional fee. This service includes
                            delivery to the room of your choice, assembly, placement, and removal of all packaging materials.
                        </p>
                        <p>
                            We offer a 30-day return policy for unused items in original packaging. Return shipping is free.
                            Manufacturer warranty covers defects in materials and workmanship for 3 years from date of purchase.
                        </p>
                    </div>
                </div>
            </section>

            <section class="related-products">
                <div class="container">
                    <div class="section-title">
                        <h2>You May Also Like</h2>
                        <p>Discover similar products</p>
                    </div>

                    <div class="products">
                        <div class="product-card">
                            <div class="product-img">
                                <img src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Contemporary Loveseat" />
                            </div>
                            <div class="product-info">
                                <h3 class="product-title">Contemporary Loveseat</h3>
                                <p class="product-price">$899.99</p>
                                <a href="#" class="btn btn-outline">View Product <MoveRight /></a>
                            </div>
                        </div>

                        <div class="product-card">
                            <div class="product-img">
                                <img src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80" alt="Leather Armchair" />
                            </div>
                            <div class="product-info">
                                <h3 class="product-title">Leather Armchair</h3>
                                <p class="product-price">$599.99</p>
                                <a href="#" class="btn btn-outline">View Product <MoveRight /></a>
                            </div>
                        </div>

                        <div class="product-card">
                            <div class="product-img">
                                <img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Coffee Table" />
                            </div>
                            <div class="product-info">
                                <h3 class="product-title">Modern Coffee Table</h3>
                                <p class="product-price">$449.99</p>
                                <a href="#" class="btn btn-outline">View Product <MoveRight /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductPage
