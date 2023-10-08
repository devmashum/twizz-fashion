import React from 'react';

const UpcomingEvent = ({ event }) => {

    const { title, date, image } = event;
    return (
        <div className="card m-2 bg-base-200 shadow-md image-full ">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{date}</h2>
                <p className='text-4xl font-bold'>{title}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvent;