import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className='text-center text-6xl p-10 bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Contact Us</div>

            <div className="card flex-shrink-0 w-9/12 mx-auto p-5 m-5  shadow-2xl bg-base-100">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subject</span>
                        </label>
                        <input type="text" placeholder="subject" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Text</span>
                        </label>
                        <input type='text' placeholder="your message" className="input input-bordered" required />



                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">send</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Contact;