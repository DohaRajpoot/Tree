import React from 'react';
import './ECommerce.css';

const ECommerce = () => {
  const products = [
    {
      id: 1,
      name: 'Plant Medicine ',
      imageUrl: 'med1.jpeg',
      link: 'https://www.daraz.pk/products/plantcare-plus-1ltr-genral-spray-for-all-types-of-plants-safe-secure-i201672103.html',
    },
    {
      id: 2,
      name: 'Plant Medicine ',
      imageUrl: 'med2.jpeg',
      link: 'https://webinopoly.com/blogs/news/top-25-home-garden-shopify-stores',
    },
    {
      id: 1,
      name: 'Plant Medicine ',
      imageUrl: 'med4.jpeg',
      link: 'https://www.behance.net/gallery/91125855/Plant-Store-eCommerce-Website',
    },
    // {
    //   id: 1,
    //   name: 'Plant Medicine A',
    //   imageUrl: 'product1.jpeg',
    //   link: 'https://example.com/product1',
    // },
  //   {
  //     id: 1,
  //     name: 'Plant Medicine A',
  //     imageUrl: 'product1.jpeg',
  //     link: 'https://example.com/product1',
  //   },
  //   {
  //     id: 1,
  //     name: 'Plant Medicine A',
  //     imageUrl: 'product1.jpeg',
  //     link: 'https://example.com/product1',
  //   },
  ];

  return (
    <div className="product-list-container">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-box">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              View Product
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ECommerce;