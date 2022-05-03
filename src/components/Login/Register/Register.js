import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
	const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
	  const [updateProfile, updating, upadeteError] = useUpdateProfile(auth);


    const navigate = useNavigate();
    
    const navigateLogin = () =>{
        navigate('/login');
    } 
    if(user){
      console.log(user);  
    }

    const handleRegister = async (e) =>{
        e.preventDefault();
        const email =e.target.email.value;
        const password=e.target.password.value;
        const name =e.target.name.value;
		// const agree = e.target.terms.checked;

		await createUserWithEmailAndPassword(email, password);
		await updateProfile({displayName: name});
		console.log('Updated profile');
		navigate('/home');
		
    }
	if(loading || updating){
		return <Loading></Loading>
	}

    return (
        <div>
           
            <div className="container-fluid">
		<div className="row main-content bg-success text-center">
			<div className="col-md-4 text-center company__info">
				<span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
				<h4 className="company_title">Car Parts WareHouse</h4>
			</div>
			<div className="col-md-8 col-xs-12 col-sm-12 login_form ">
				<div className="container-fluid">
					<div className="row">
						<h2>Register Now</h2>
					</div>
                    
					<div className="row">
						<form onSubmit={handleRegister} control="" className="form-group">
							<div className="row">
								<input  type="text" required name="name" id="username" className="form__input" placeholder="UserName"/>
							</div>
							<div className="row">
								<input  type="email" required name="email" id="username" className="form__input" placeholder="UserEmail"/>
							</div>
							<div className="row">
								<span className="fa fa-lock"></span>
								<input  type="password" required name="password" id="password" className="form__input" placeholder="Password"/>
							</div>
							<input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
							<label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'}  htmlFor="terms">Accept Terms and Condition</label>
							<div className="row w-100 mx-auto d-block">
							<input disabled={!agree}
							type="submit" value="Submit" className="btn-sub"/>
							</div>
						</form>
					</div>
                    <SocialLogin></SocialLogin>
					<div className="row mt-3">
						<p>Already Register ? <Link to='/login' onClick={navigateLogin}  className='text-decoration-none pe-auto text-danger'>Login</Link></p>
					</div>
				</div>
			</div>
		</div>
	</div>
        </div>
    );
};

export default Register;