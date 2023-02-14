import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';
import { FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import UseTittle from '../../utils/UseTittle';
const Login = () => {
    UseTittle('Login')
    const { login, googleSignin } = useContext(AuthContext)
    const hanldeGoogleLogin =async (e) =>{
        e.preventDefault();
        const googleRes = await googleSignin()
        if (googleRes.uid){
            toast('User Successfully logged in', {autoClose:1000})
        }
    }
    const handleLogin = async (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;
        await login(email, pass);
    }
    return (
        <form onSubmit={handleLogin} className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <div className="text-center lg:text-left pl-5">
                   
                    <img className='h-96 rounded-lg' src="https://i.ibb.co/gJVM5hg/360-F-119115529-m-Enw3l-Gp-Ldl-Dkf-Lg-Rc-VSb-FRu-Vl6s-MDty.jpg" alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' required  type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password'  required type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                            <label className="label">
                                <Link to="/register" className="label-text-alt link link-hover">Not have Account?</Link>
                            </label>
                            <button onClick={hanldeGoogleLogin} className='flex items-center'>
                                <FaGoogle />
                                <span className='ml-2'>Sign in with GOOGLE</span>
                            </button>
                         
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type='submit'>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>   
 );
};

export default Login;