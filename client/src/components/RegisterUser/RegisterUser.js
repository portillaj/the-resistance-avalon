import React from 'react'
import { Button, Form, Grid, Header, Icon, Segment } from 'semantic-ui-react'

const RegisterUser = (props) => {
    return(
        <Grid textAlign='center' verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 600 }}>
                <Header as='h2' color='blue' textAlign='center'>
                <Icon name='user secret' /> Register For An Account
                </Header>
                <Form size='massive' onChange={props.change} onSubmit={props.submit}>
                    <Segment stacked>
                        <Form.Group widths='equal'>
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-first-name'
                                label='First name'
                                placeholder='First name'
                                name="registeredFirstName"
                                value={props.firstname}
                            />
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-last-name'
                                label='Last name'
                                placeholder='Last name'
                                name="registeredLastName"
                                value={props.lastname}
                            />
                        </Form.Group>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' name='registeredUsername' value={props.username}/>
                        <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' name='registeredPassword' value={props.password}/>
                        <Form.Input fluid icon='lock' iconPosition='left' placeholder='Confirm Password' type='password' name='confirmPassword' value={props.confirm}/>
                        <Button color='blue' fluid size='large'>Register</Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    );
}

export default RegisterUser