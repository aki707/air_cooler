import { NavLink } from 'react-router-dom'
import './OtherSignup.css'

export default function OtherSignup() {
    return(
        <div> 
            <hr className="line" />
            <div className="Orsignup">
                <p>Or Sign Up with</p>
            </div>
            <div className="other">
                <div className="signup__google">
                    <button>Google</button>
                </div>
                <div className="signup__facebook">
                    <button>Facebook</button>
                </div>
                <div className="signup__apple">
                    <button>Apple</button>
                </div>
            </div>
            <div className="AlreadyLogin">
            <p>Already have an Account <NavLink to="/login">Log in </NavLink></p>
            </div>
        </div>
    )
}