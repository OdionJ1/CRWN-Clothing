import React, { Component } from 'react'
import FormInput from './FormInput'
import CustomButton from './CustomButton'
import './css/sign-in.scss'

import { auth,  signInWithGoogle } from '../firebase/firebaseUtils'

export default class SignIn extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        let { email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: ''});
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (event) => {
        let {name, value} = event.target
        this.setState({ [name]: value} )
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} type="email" value={this.state.email} name="email" label='Email' required/>
            
                    <FormInput handleChange={this.handleChange} type="password" value={this.state.password} label="Password" name="password" required/>
                    
                    <div className="buttons">
                        <CustomButton type="submit">Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

