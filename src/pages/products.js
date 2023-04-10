import React from 'react';
import Image from 'next/image';

const Products = () => {
    const products = [
        {
            id: 1,
            title: 'COVID-19 Products',
            description: 'Products to keep you safe during the pandemic',
            image: '/images/covid-19.jpg',
        },
        {
            id: 2,
            title: 'Babies Products',
            description: 'Products for your baby',
            image: '/images/babies.jpg',
        },
        {
            id: 3,
            title: 'Cosmetics Products',
            description: 'Products to enhance your beauty',
            image: '/images/cosmetics.jpg',
        },
        {
            id: 4,
            title: 'Health Products',
            description: 'Products to keep you healthy',
            image: '/images/health.jpg',
        },
        {
            id: 5,
            title: 'Hygiene Products',
            description: 'Products to keep you clean',
            image: '/images/hygiene.jpg',
        },
        {
            id: 6,
            title: 'Optics Products',
            description: 'Products for your vision',
            image: '/images/optics.jpg',
        },
    ];

    return (
        <div>
            <h1>Our Products</h1>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <Image src={product.image} alt={product.title} width={500} height={500} />
                </div>
            ))}
        </div>
    );
};

export default Products;
