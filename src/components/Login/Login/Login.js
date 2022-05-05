import React, {useRef} from 'react';
import './Login.css';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

const Login = () => {
	let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
	  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const location = useLocation(); 
    let from = location.state?.from?.pathname || '/'
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()

	if(user){
        // navigate(from, {replace: true});
    }
    const handleSubmit = async e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

       await signInWithEmailAndPassword(email, password);
	   const {data} = await axios.post('http://localhost:5000/login', {email});
	   localStorage.setItem('accessToken', data.accessToken);
		navigate(from, {replace: true});
	//    localStorage.setItem('accessToken', data.accessToken);
	//    navigate(from, {replace: true});
    }
	

    const navigateRegister = e =>{
        navigate('/register');
    }
    
	if (error) {
        errorElement =  <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
    
      }
	  if(loading){
		return <Loading></Loading>
	}

	  const resetPassword = async() =>{
		const email = emailRef.current.value;
		if(email){
			await sendPasswordResetEmail(email);
		toast('Please Check your Email and also spam folder');
		}
		else{
			toast('Please enter your email');
		}
	  }

    return (
        <div>
            
            <div className="container-fluid">
                <Helmet>
					<title>Login-WareHouse</title>
				</Helmet>
		<div className="row main-content bg-success text-center">
			<div className="col-md-4 text-center company__info">
				<span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
				<h4 className="company_title">Car Parts WareHouse</h4>
			</div>
			<div className="col-md-8 col-xs-12 col-sm-12 login_form ">
				<div className="container-fluid">
					<div className="row">
						<h2>Log In</h2>
					</div>
                   
					<div className="row">
						<form onSubmit={handleSubmit} control="" className="form-group">
							<div className="row">
								<input ref={emailRef} type="email" required name="username" id="username" className="form__input" placeholder="UserEmail"/>
							</div>
							<div className="row">
								<span className="fa fa-lock"></span>
								<input ref={passwordRef} type="password" required name="password" id="password" className="form__input" placeholder="Password"/>
							</div>
							<div className="row">
								<input type="checkbox" name="remember_me" id="remember_me" className=""/>
								<label for="remember_me">Remember Me!</label>
							</div>
							<div className="row w-100 mx-auto d-block">
								<input type="submit"  value="Login" className="btn-sub"/>
								
							</div>
						</form>
						{errorElement}
					</div>
					<ToastContainer></ToastContainer>
                    <SocialLogin></SocialLogin>
					<div className="row mt-3">
						<p>Don't have an account? <Link to='/register' onClick={navigateRegister} className='text-decoration-none pe-auto text-danger'>Register Here</Link></p>
						<p>Forget Password? <button onClick={resetPassword} className='btn btn-link text-decoration-none pe-auto text-primary'>Reset Password</button></p>
					</div>
				</div>
			</div>
		</div>
	</div>
        </div>
    );
};

export default Login;