import "./register.css"
import netflix from "../assets/2.png"

const RegisterComponent = () => {
  return (
		<div className='mother-container'>
			<img className='img' src={netflix} width='170px' height='100px' />
			<div className='container'>
				<h1 className='h1'>Sign In</h1>
				<form>
					<input
						type='email'
						name='email'
						placeholder='Email or phone number'
					/>
					<br />
					<input type='password' name='password' placeholder='password' />
					<br />
					<button type='submit' className="sign-up">Sign in</button>
					<h3>OR</h3>
					<input placeholder="Use a sign in code"/>
					<a>forgot password</a>
          <input type="checkbox"/> Remember me
          <h3>New to Netflix? <a>Sign up now</a></h3>
					<h5>
						This page is protected by Google reCAPTCHA to ensure you're not a
						bot. <span>Learn more.</span>
					</h5>
				</form>
			</div>
		</div>
	);
}

export default RegisterComponent