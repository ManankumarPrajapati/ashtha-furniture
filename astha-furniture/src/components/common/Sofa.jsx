import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { ProductCard } from "@/components/ProductCard";
// import { FilterSidebar } from "@/components/FilterSidebar";
import { ArrowLeft, Grid, List } from "lucide-react";
import { useNavigate } from "react-router-dom";
import '../../assets/scss/productpage.scss'

// Import images
// import sofa1 from "@/assets/sofa-1.jpg";
// import sofa2 from "@/assets/sofa-2.jpg";
// import sofa3 from "@/assets/sofa-3.jpg";
// import sofa4 from "@/assets/sofa-4.jpg";
// import sofa5 from "@/assets/sofa-5.jpg";

const featuredSofas = [
    { id: "1", name: "Luxury Leather Sofa", price: "$2,499", image: sofa1, category: "sofa", isNew: true },
    { id: "2", name: "Modern Sectional", price: "$1,899", image: sofa2, category: "sofa" },
    { id: "3", name: "Cognac Recliner", price: "$1,599", image: sofa3, category: "sofa" },
    { id: "4", name: "Gray L-Shaped Sofa", price: "$2,199", image: sofa4, category: "sofa" },
    { id: "5", name: "Mid-Century Loveseat", price: "$1,299", image: sofa5, category: "sofa", isNew: true },
];

const allSofas = [
    ...featuredSofas,
    { id: "6", name: "Vintage Chesterfield", price: "$3,299", image: sofa1, category: "sofa" },
    { id: "7", name: "Minimalist Two-Seater", price: "$999", image: sofa2, category: "sofa" },
    { id: "8", name: "Cozy Reading Chair", price: "$799", image: sofa3, category: "sofa" },
];

const Sofas = () => {
    const navigate = useNavigate();
    const [viewMode, setViewMode] = useState("grid");

    return (
        <div className={styles.sofasPage}>
            {/* Floating Header */}
            <header className={styles.header}>
                <div className={styles.container}>
                    <button variant="ghost" onClick={() => navigate("/")}>
                        <ArrowLeft className={styles.icon} />
                        Back to Home
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Premium Sofas</h1>
                    <p className={styles.heroSubtitle}>
                        Discover our carefully curated selection of luxury sofas, designed for comfort and style.
                        From modern sectionals to classic leather pieces.
                    </p>
                    <div className={styles.heroBadge}>
                        <span>{allSofas.length} Products</span>
                        <span>Premium Quality</span>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className={styles.featured}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Featured Collection</h2>
                    <div className={styles.productsGrid}>
                        {featuredSofas.map((sofa, index) => (
                            <div key={sofa.id} style={{ animationDelay: `${index * 0.1}s` }}>
                                <ProductCard {...sofa} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Filter + All Sofas */}
            <section className={styles.allSofas}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div>
                            <h2 className={styles.sectionTitle}>Explore All Sofas</h2>
                            <p className={styles.sectionSubtitle}>Find your perfect piece from our complete collection</p>
                        </div>

                        <div className={styles.viewControls}>
                            <span>{allSofas.length} products available</span>
                            <div className={styles.toggleButtons}>
                                <Button variant={viewMode === "grid" ? "default" : "ghost"} onClick={() => setViewMode("grid")}>
                                    <Grid className={styles.icon} />
                                </Button>
                                <Button variant={viewMode === "list" ? "default" : "ghost"} onClick={() => setViewMode("list")}>
                                    <List className={styles.icon} />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.productsLayout}>
                        {/* Sidebar */}
                        <div className={styles.sidebar}>
                            <FilterSidebar />
                        </div>

                        {/* Products */}
                        <div className={`${styles.products} ${viewMode === "list" ? styles.listView : styles.gridView}`}>
                            {allSofas.map((sofa, index) => (
                                <div key={sofa.id} style={{ animationDelay: `${index * 0.05}s` }}>
                                    <ProductCard {...sofa} className={viewMode === "list" ? styles.listCard : ""} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sofas;
