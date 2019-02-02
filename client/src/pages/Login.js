import React, { Component } from 'react'
// import SignIn from '../components/SignIn/SignIn'
// import avalonImage from '../images/avalon-character-photo.jpg'
import { Button, Form, Icon, Header, Message, Segment, Grid } from 'semantic-ui-react'
import RegisterModal from '../components/RegisterModal/RegisterModal'
import './Login.css'

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
          username: "",
          email: "",
          password: "",
          isLoading: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event, {name, value}) {
        this.setState({
            [name]: value
        })
      }
    
      handleSubmit(event) {
        event.preventDefault()
        const {username, email, password} = this.state
        this.setState({
            username: '',
            email: '',
            password: ''
        })
      }

    render() {
        return(
            <div className='login-form'>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                            <Header as='h2' color='red' textAlign='center'>
                                <Icon name='user'/> Log-in to your account
                            </Header>
                        <Form size='large' onSubmit={this.handleSubmit}>
                            <Segment stacked>
                                <Form.Input onChange={this.handleChange} value={this.state.username} fluid icon='user' iconPosition='left' placeholder='Username' name='username'/>
                                <Form.Input onChange={this.handleChange} value={this.state.email} fluid icon='envelope' iconPosition='left' placeholder='E-mail address' name='email'/>
                                <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                name='password'
                                value={this.state.password}
                                onChange={this.handleChange}
                                />

                                <Button type='submit' color='red' fluid size='large'>
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                        <Message>
                            Don't have an account? <RegisterModal/>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}