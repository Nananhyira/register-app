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
						className='input'
						type='email'
						name='email'
						placeholder='Email or phone number'
					/>
					<br />
					<input
						className='input'
						type='password'
						name='password'
						placeholder='password'
					/>
					<br />
					<button type='submit' className='sign-up'>
						Sign in
					</button>
					<h3 className="c">OR</h3>
					<input className='input use' placeholder='Use a Sign-In Code' />
					<a className='fp'>Forgot password ?</a>
					<div className='rm'>
						<input type='checkbox' /> Remember me
					</div>

					<h3 className='rm c'>
						New to Netflix? 
						<span className='use'>
							<a>Sign up now</a>
						</span>
					</h3>
					<h5 className='rm c d'>
						This page is protected by Google reCAPTCHA to ensure you're not a
						bot. <span className="l">Learn more.</span>
					</h5>
				</form>
			</div>
		</div>
	);
}

export default RegisterComponent