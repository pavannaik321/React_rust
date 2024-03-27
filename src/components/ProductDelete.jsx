import axios from 'axios';
import React, { useState } from 'react';

const ProductDelete = () => {
    const [id, setId] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleId = async () => {
        const newId = parseInt(id, 10);
            setData(null)
        try {
            setLoading(true);
            const response = await axios.delete(`/api/products/${newId}`);
            setData(response.data);
            setLoading(false);
            console.log(response.data);
        } catch (error) {
            console.log("Error", error);
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Delete by Product ID</h1>
            <div className="mb-4">
                <label htmlFor="productid" className="block text-sm font-medium text-gray-700">Enter ID:</label>
                <input
                    type="text"
                    id="productid"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <button
                onClick={handleId}
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
                Delete
            </button>
            
        </div>
    );
};

export default ProductDelete;
