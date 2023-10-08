import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import swal from 'sweetalert';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../Firebase.config';

const Login = () => {
    // login with google
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }
    // 
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    const { signIn } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                if (result.user) {
                    swal("Good job!", "You logged successfully", "success");
                    navigate(location?.state ? location.state : '/');
                } else {
                    swal("Good job!", "You logged successfully", "error");
                }
            })
            .catch(error => {
                console.error(error);
            })

    }
    return (
        <div className='w-1/2 mx-auto'>
            <h1 className=' text-3xl text-center mt-5 font-bold'>Please Login</h1>
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500">Login</button>
                </div>


                <button onClick={handleGoogleSignIn} className='btn font-bold'> <FcGoogle className='text-3xl'></FcGoogle>Login with Google</button>


                <p className='text-center'>Don't have any account please <Link className=' text-blue-600 font-extrabold' to='/register'>Register</Link> </p>
            </form>
        </div>
    );
};

export default Login;