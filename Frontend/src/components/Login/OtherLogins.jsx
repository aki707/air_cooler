import './OtherLogins.css'
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button"

export default function OtherLogins() {
    return(
        <div>
            <div className="line"></div>
            <div className="or">
            <h5>or Login with</h5> </div>
            <div className="otherLogins">
            <div className="signup__google">
                    <button>Google</button>
                </div>
                <div className="signup__facebook">
                    <button>Facebook</button>
                </div>
                <div className="signup__apple">
                <Button>Click me</Button>
                </div>
            </div>
            <div className="NewSignup">
            <p>
              Don't have an account? <NavLink to="/signup">Sign up</NavLink>
            </p>
          </div>
        </div>
    )
}