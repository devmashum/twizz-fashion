import React from 'react';

const HugoBossCard = ({ product }) => {
    const { brandname, name, type, price, image, rating, description } = product;

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl mbq-5">

                <figure><img src={image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <hr />
                    <div className="flex justify-center items-center">
                        <p className='text-2xl'>Price: ${price}</p>
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HugoBossCard;