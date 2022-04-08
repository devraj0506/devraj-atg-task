import React from 'react'
import './modalBody.css'
import modalImage from '../../images/modalImage.png'
import CreateAccount from './modalBodyLeftInputs/CreateAccount'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignIn from './modalBodyLeftInputs/SignIn'

export default function ModalBody() {



    return (
        <div className="container modalContainer d-flex">


            <Switch>

                <Route path='/signin' exact component={SignIn} />
                <Route path='/' component={CreateAccount} />


            </Switch>

            <div className="container-fluid mt-4 p-0 modalContainerRight">
                <img src={modalImage} alt="" />
            </div>
        </div>
    )
}
