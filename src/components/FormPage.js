import React from 'react'
import SignIn from './Sign-in'
import SignUp from './Sign-up'
import './css/formpage.scss'

export default function FormPage() {
    return (
        <div className="form-page">
            <SignIn />
            <SignUp />
        </div>
    )
}
