import React, {useRef} from 'react';
import './Login.css';
import {Link, useNavigate} from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()

    const handleSubmit = e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);
    }

    const navigateRegister = e =>{
        navigate('/register');
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
							<div className="row">
								<input type="submit" value="Submit" className="btn-sub"/>
							</div>
						</form>
					</div>
					<div className="row">
						<p>Don't have an account? <Link to='/register' onClick={navigateRegister} className='text-decoration-none pe-auto text-danger'>Register Here</Link></p>
					</div>
				</div>
			</div>
		</div>
	</div>
        </div>
    );
};

export default Login;