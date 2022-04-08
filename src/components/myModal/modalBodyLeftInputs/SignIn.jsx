import React from 'react'
import ButtonsLarge from '../../Buttons/ButtonsLarge'
import './createAccount.css'
import facebookIcon from '../../../images/facebookIcon.png'
import googleIcon from '../../../images/googleIcon.png'
import ModalTitle from '../ModalTitle'
import './signIn.css'
import { Link } from 'react-router-dom'

export default function SignIn() {
    return (
        <div>
            <div className="myS">
                <ModalTitle title="Welcome Back" util="Don't have an account yet?" linker="Create new for free!" linkerPath={'/create'} />
            </div>

            <div className="container mt-4 p-0 modalContainerLeft d-flex flex-column">

                <input type="email" className="form-control" placeholder="Email" />
                <input type="password" className="form-control" placeholder="Password" />


                <div className="container-fluid p-0 mobileSignIn">
                    <div >
                        <ButtonsLarge text="Sign In" Color={"blue"} br2={"br2"} />

                    </div>
                    <span className=" mt-3"><Link to="/create">or,Create Account</Link></span>
                </div>

                <ButtonsLarge image={facebookIcon} text="Sign up with Facebook" Color={"sign"} />
                <ButtonsLarge className="mt-0" image={googleIcon} text="Sign up with Google" Color={"sign"} />

                <div className="container forgotPass d-flex align-items-center justify-content-center mt-1">
                    Forgot Password?
                </div>

            </div>
        </div>
    )
}