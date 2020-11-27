import React, { Component } from 'react'
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import './css/sign-up.scss'

import {auth, createUserProfileDocument} from '../firebase/firebaseUtils'

export default class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    
    handleSubmit = async (event) => {
        event.preventDefault()

        let {displayName, email, password, confirmPassword} = this.state

        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, {displayName})

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error){
            console.log(error)
        }
    };

    handleChange = (event) => {
        let {name, value} = event.target;
        this.setState({ [name]: value} );
    }

    render() {
        return (
            <div className="sign-up">
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" label="Display Name" value={this.state.displayName} handleChange={this.handleChange} required />
                    <FormInput type="text" name="email" label="Email" value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput type="password" name="password" label="Password" value={this.state.password} handleChange={this.handleChange} required />
                    <FormInput type="password" name="confirmPassword" label="Confirm Password" value={this.state.confirmPassword} handleChange={this.handleChange} required />

                    <CustomButton type="submit">Sign Up </CustomButton>
                </form>
            </div>
        )
    }
}
