
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import swal from 'sweetalert';
const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const { createUser } = useContext(AuthContext);


    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photo');
        console.log(name, photo, email, password)
        // validation

        if (password.length <= 6) {
            setRegisterError('Password must be longer than 6 characters');
            return;
        }
        else if
            (!/([A-Z])([?=.*[@$!%*?&])/.test(password)) {
            setRegisterError('Your password should have at least one uppercase letter and one special character.');
            return;
        }


        setRegisterError('');

        // Create User
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                if (result.user) {
                    swal("Good job!", "You have registered successfully", "success");
                }
                else {
                    swal("Nope!", "You registration was not successful", "error");
                }
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);


            })
    }

    return (
        <div className='lg:w-1/2 mx-auto'>
            <h1 className=' text-3xl text-center mt-5 font-bold'>Please Register</h1>
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input name='photo' type="text" placeholder="photo url" className="input input-bordered" />
                </div>
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

                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500">Login</button>
                </div>
                <p>Already have an account please <Link className=' text-blue-600 font-extrabold' to='/login'>Login</Link> </p>
                <hr />
                {
                    registerError && <p className='text-red-600'>{registerError}</p>
                }
                <hr />
            </form>


        </div>
    );
};

export default Register;