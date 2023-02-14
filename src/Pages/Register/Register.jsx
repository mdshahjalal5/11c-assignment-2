import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/Authprovider';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';
import UseTittle from '../../utils/UseTittle';
const Register = () => {
    UseTittle('Register')
    const { createUser, googleSignin } = useContext(AuthContext)
     async function handleRegister(form){
        let email, password; 
        email = form.email.value; 
        password = form.password.value;
         const singUpRes = await createUser(email, password)
         if (singUpRes.user?.uid){
            toast('user successfully register')
         }
     }
    const hanldeGoogleLogin = async (e) => {
        e.preventDefault();
        const googleRes = await googleSignin()
        if (googleRes.uid) {
            toast('User Successfully logged in', { autoClose: 1000 })
        }
    }

    return (
        <form onSubmit={(e) =>{
            e.preventDefault()
             handleRegister(e.target)}} className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <div className="text-center lg:text-left pl-5">

                    <img className='h-96 rounded-lg' src="https://i.ibb.co/gJVM5hg/360-F-119115529-m-Enw3l-Gp-Ldl-Dkf-Lg-Rc-VSb-FRu-Vl6s-MDty.jpg" alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required name='email' type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required name='password' type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">Already have Account?</Link>
                            </label>
                            <button onClick={hanldeGoogleLogin} className='flex items-center'>
                                <FaGoogle />
                                <span className='ml-2'>Sign in with GOOGLE</span>
                            </button>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>   
    );
};

export default Register;