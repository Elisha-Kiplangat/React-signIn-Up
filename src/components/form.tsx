import './form.scss'
import { SubmitFunction } from '../App'

export default function Form() {

    return (
        <form className="form" action="">
            <h3>Register</h3>

            <div className='switchBtn'>
                <button className="signInBtn"> Sign In</button>
                <button className="signUpBtn"> Sign Up</button>
            </div>
            <div className="signIn">
                <label>Name:</label>
                <input type="text" placeholder='Full Name'/>
                <label>Email</label>
                <input type="email" placeholder='Email'/>
                <button className="submit" type="submit" onClick={SubmitFunction}>Sign Up</button>
            </div>
        </form>
    )
}

