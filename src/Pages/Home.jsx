import { NavLink, useLoaderData } from 'react-router-dom';
import banner from '../assets/hangers-1850082_640.jpg'

import Events from './Events';
const Home = ({ product }) => {
    const events = useLoaderData();
    console.log(events);

    console.log(product);


    return (
        <div>
            <div className='md:flex'>
                <div className='lg:w-[60%] p-20 bg-gradient-to-r from-cyan-500 to-blue-500'>
                    <h1 className=' text-6xl text-purple-600 font-extrabold  mb-3'>Fashion Week </h1>
                    <h2 className=' text-4xl text-blue-100'>in Berlin</h2>
                    <h3 className=' text-2xl text-blue-100'>Discover popular events in the 'Fashion' category in your area and online.</h3>
                </div>
                <div className='lg:w-[40%]'>
                    <img src={banner} alt="" />
                </div>
            </div>

            <div className='grid md:grid-cols-3 text-center w-[80%] gap-10 mt-5 mx-auto'>

                <NavLink to={'/nike'}><div className="card w-96 bg-base-100 shadow-xl bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-500">

                    <div className="card-body ">
                        <h2 className=" font-extrabold text-center text-6xl text-wh">Nike</h2>
                        <p className='text-xl text-white font-extrabold'>Just Do It</p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div></NavLink>
                <NavLink to={'/adidas'}><div className="card w-96 bg-base-100 shadow-xl bg-gradient-to-r from-indigo-500 from-20% via-sky-500 via-30% to-emerald-700 to-90%">

                    <div className="card-body">
                        <h2 className="font-extrabold text-center text-6xl">Adidas</h2>
                        <p className='text-xl text-white font-extrabold'>Impossible is Nothing</p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div></NavLink>
                <NavLink to={'/gucci'}><div className="card w-96 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">

                    <div className="card-body">
                        <h2 className="font-extrabold text-center text-6xl">Gucci</h2>
                        <p className='text-xl text-white font-extrabold'>Quality is remembered long after </p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div></NavLink>
                <NavLink to={'/zara'}><div className="card w-96 bg-base-100 shadow-xl bg-gradient-to-r from-indigo-700">

                    <div className="card-body">
                        <h2 className="font-extrabold text-center text-6xl">Zara</h2>
                        <p className='text-xl text-white font-extrabold'>Zara - Love Your Curves</p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div></NavLink>
                <NavLink to={'/hugoboss'}><div className="card w-96 bg-base-100 shadow-xl bg-gradient-to-r from-cyan-500 to-blue-400">

                    <div className="card-body">
                        <h2 className="font-extrabold text-center text-6xl">Hugo Boss</h2>
                        <p className='text-xl text-white font-extrabold'>Success is a Journey</p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div></NavLink>
                <NavLink to={'/levis'}><div className="card w-96 bg-base-100 shadow-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">

                    <div className="card-body">
                        <h2 className="font-extrabold text-center text-6xl">Levi's</h2>
                        <p className='text-xl text-white font-extrabold'>Quality Never Goes Out of Style</p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div></NavLink>


            </div>



            <div className='grid lg:grid-cols-3 max-w-max mx-auto mt-5 gap-6'>

                {
                    events.map(event => <Events key={event.id} event={event}></Events>)
                }


            </div>


        </div>


    );
};

export default Home;