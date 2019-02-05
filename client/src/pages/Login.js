import React, {Component} from 'react'
import {Button, Image} from 'semantic-ui-react'
import './Login.css'
import avalonImage from '../images/avalon-tokens.jpg'
import SignIn from '../components/SignIn/SignIn'
import RegisterUser from '../components/RegisterUser/RegisterUser';
import API from '../utils/API'
import validator from '../utils/formValidator'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onRegisterForm: false,
            loginUsername: '',
            loginPassword: '',
            registeredFirstName: '',
            registeredLastName: '',
            registeredUsername: '',
            registeredPassword: '',
            confirmPassword: '',
            firstnameError: '',
            lastnameError: '',
            usernameError: '',
            emailError: '',
            passwordError: ''
        }
    }

    changeForm = event => {
        event.preventDefault()
        if (event.target.innerHTML === "Login") {
            this.setState({
                onRegisterForm : false
            })
        } else if (event.target.innerHTML === "Sign-Up") {
            this.setState({
                onRegisterForm : true
            })
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSignIn = () => {
        const userCredentials = {
            username: this.state.loginUsername,
            password: this.state.loginPassword
        }
        API.signIn({
            username: userCredentials.username,
            password: userCredentials.password
        }).then(res => {
            if (res.data === 'Success') {
                this.props.history.push('/lobby')
            } else {
                console.log('Sign In Error')
            }
        })
        this.setState({loginUsername: '', loginPassword: ''})
    }

    validate = user => {
        try {
            if (validator.firstNameValidator(user.firstName) === 'Success') {
                this.setState({
                    registeredFirstName : user.firstName
                })
            }
        } catch (err) {
            let firstnameError = err
            if (firstnameError) {
                this.setState({
                    firstnameError: firstnameError
                }, () => {
                     console.log(this.state.firstnameError)
                })
            } 
            return false
        }

        try {
            if (validator.lastNameValidator(user.lastName) === 'Success') {
                this.setState({
                    registeredLastName : user.lastName
                })
            }
        } catch (err) {
            let lastnameError = err
            if (lastnameError) {
                this.setState({
                    lastnameError: lastnameError
                }, () => {
                     console.log(this.state.lastnameError)
                })
            }
            return false
        }

        try {
            if (validator.usernameValidator(user.username) === 'Success') {
                this.setState({
                    registeredUsername : user.username
                })
            }
        } catch(err) {
            let usernameError = err
            if (usernameError) {
                this.setState({
                    usernameError: usernameError
                }, () => {
                     console.log(this.state.usernameError)
                })
            }
            return false
        }

        try {
            if (validator.passwordValidator(user.password, user.username, user.confirmationPassword) === 'Success') {
                this.setState({
                    registeredPassword : user.password
                })
            }
        } catch(err) {
            let passwordError = err
            if (passwordError) {
                this.setState({
                    passwordError: passwordError
                }, () => {
                     console.log(this.state.passwordError)
                })
                
            }
            return false
        }
        return true
    }

    handleRegister = () => {
        const registeredUser = {
            firstName: this.state.registeredFirstName,
            lastName: this.state.registeredLastName,
            username: this.state.registeredUsername,
            password: this.state.registeredPassword,
            confirmationPassword: this.state.confirmPassword
        }

        const isValid = this.validate(registeredUser)

        if (isValid) {
            API.registerUser({
                firstName: registeredUser.firstName,
                lastName: registeredUser.lastName,
                username: registeredUser.username,
                password: registeredUser.password
            }).then(res => {
                console.log(res.data)
            })
            this.setState({
                registeredFirstName: '',
                registeredLastName: '',
                registeredUsername: '',
                registeredPassword: '',
                confirmPassword: ''
            })
        } else {
            this.setState({
                registeredFirstName: '',
                registeredLastName: '',
                registeredUsername: '',
                registeredPassword: '',
                confirmPassword: ''
            })
        }
    }

    render() {
        let form = null
        if (!this.state.onRegisterForm) {
            form = (
                <div>
                    <SignIn
                        change={this.handleChange}
                        submit={this.handleSignIn}
                        username={this.state.loginUsername}
                        password={this.state.loginPassword}
                    />
                </div>
            )
        } else {
            form = (
                <div>
                    <RegisterUser
                        change={this.handleChange}
                        submit={this.handleRegister}
                        firstname={this.state.registeredFirstName}
                        lastname={this.state.registeredLastName}
                        username={this.state.registeredUsername}
                        password={this.state.registeredPassword}
                        confirm={this.state.confirmPassword}/>
                </div>
            )
        }
        return (
            <div className="login-page">
                <div className="login__aside">
                    <Image src={avalonImage} fluid/>
                </div>
                <div className="login__form">
                    <div className="formSwitcher">
                        <Button.Group size="huge">
                            <Button onClick={this.changeForm} className="trigger-login-form" color="orange">Login</Button>
                            <Button.Or/>
                            <Button onClick={this.changeForm} className="trigger-signup-form" color="blue">Sign-Up</Button>
                        </Button.Group>
                    </div>
                    <div className="form">
                        {form}
                    </div>
                </div>
            </div>
        )
    }
}