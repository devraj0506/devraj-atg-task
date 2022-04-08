import React from 'react'
import ButtonsLarge from '../../Buttons/ButtonsLarge'
import './createAccount.css'
import facebookIcon from '../../../images/facebookIcon.png'
import googleIcon from '../../../images/googleIcon.png'
import ModalTitle from '../ModalTitle'
import { Link } from 'react-router-dom'

export default function CreateAccount() {
    return (
        <div>
            <div className="myC ">
                <ModalTitle title="Create Account" util="Already have a account?" linker="Sign In" linkerPath={'/signin'} />
            </div>

            <div className="container mt-4 p-0  d-flex flex-column">

                <div className="container-fluid p-0 d-flex">
                    <input type="text" className="form-control" placeholder="First name" />
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <input type="email" className="form-control" placeholder="Email" />
                <input type="password" className="form-control" placeholder="Password" />
                <input type="password" className="form-control" placeholder="Confirm Password" />

                <div className="container-fluid mobileCreate">
                    <div className="createAccountContainer">
                        <ButtonsLarge text="Create Account" Color={"blue"} br2={"br2"} />
                    </div>
                    <Link id="linktoSignin" to="/signin">or, Signin</Link>
                </div>


                <ButtonsLarge image={facebookIcon} text="Sign up with Facebook" Color={"sign"} />
                <ButtonsLarge className="mt-0" image={googleIcon} text="Sign up with Google" Color={"sign"} />

            </div>
        </div>
    )
}
