import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        const priceInt = parseInt(price, 10)
        e.preventDefault();
        console.log(productName)
        console.log(price)
        try {
            console.log('1')
            await axios.post('/api/products/', {
                name: productName,
                price: priceInt,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Clear the form after successful submission
            setProductName('');
            setPrice('');
            console.log("success")
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Add Product</h1>
            <div>
                <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name:</label>
                <input
                    type="text"
                    id="productName"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                />
            </div>
            <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price:</label>
                <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                />
            </div>
            <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
                Add Product
            </button>
        </div>
    );
};

export default ProductForm;
