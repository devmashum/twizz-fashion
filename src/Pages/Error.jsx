import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="hero min-h-screen bg-red-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className=' text-8xl font-extrabold text-red-600 mr-10'>X</h1>
                    <h1 className="text-5xl font-bold text-red-600"> It's an Error</h1>

                    <Link to='/'><button className="btn btn-primary mt-5">Back to Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Error;