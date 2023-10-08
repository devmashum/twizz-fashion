import React from 'react';

const Services = ({ event }) => {

    console.log(event)

    const { name, image, description, price } = event;



    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <hr />

                <div className="card-actions justify-end mt-5">
                    <p className='text-2xl'>Price: ${price}</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Services;