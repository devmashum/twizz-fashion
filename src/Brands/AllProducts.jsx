import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct';

const AllProducts = () => {

    const products = useLoaderData();
    return (
        <div>
            <p className='text-center mt-5 font-extrabold text-3xl'> Total Products: {products.length}</p>
            <div className=' grid md:grid-cols-3 gap-5 p-10'>
                {
                    products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;