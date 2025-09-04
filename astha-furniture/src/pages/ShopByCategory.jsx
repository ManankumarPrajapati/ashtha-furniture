import React, { useEffect } from "react";
import sofa from '../assets/Images/LandingPage/sofa.png'
import beds from '../assets/Images/LandingPage/all-beds.png'
import dining from '../assets/Images/LandingPage/all-dining-table-sets.png'
import units from '../assets/Images/LandingPage/tv-units.png'
import coffee from '../assets/Images/LandingPage/coffee-tables.png'
import cabinet from '../assets/Images/LandingPage/cabinet-sideboards.png'
import mattress from '../assets/Images/LandingPage/mattress.png'
import wardrobes from '../assets/Images/LandingPage/wardrobes.png'
import sofacumbeds from '../assets/Images/LandingPage/sofa-cum-beds.png'
import bookshelves from '../assets/Images/LandingPage/bookshelves.png'
import studytable from '../assets/Images/LandingPage/all-study-tables.png'
import furnishing from '../assets/Images/LandingPage/home-furnishing.png'
const ShopByCategory = () => {
    const images = [
        { src: sofa, title: "Sofas" },
        { src: beds, title: "Beds" },
        { src: dining, title: "Dining" },
        { src: units, title: "TV Units" },
        { src: coffee, title: "Coffee Tables" },
        { src: cabinet, title: "Cabinets" },
        { src: mattress, title: "Mattress" },
        { src: wardrobes, title: "Wardrobe" },
        { src: sofacumbeds, title: "Sofa Cum Bed" },
        { src: bookshelves, title: "Bookshelves" },
        { src: studytable, title: "All Study Tables" },
        { src: furnishing, title: "Home Furnishing" },
    ];

    useEffect(() => {
        const imgs = document.querySelectorAll(".gallery-img");
        imgs.forEach((img) => {
            img.style.opacity = "0";
            setTimeout(() => {
                img.style.transition = "opacity 0.5s ease";
                img.style.opacity = "1";
            }, 100);
        });
    }, []);

    return (
        <div className="shopByCategory">
            <div className="gallery">
                {images.map((item, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={item.src} alt={item.title} className="gallery-img" />
                        <div className="gallery-title">{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopByCategory
