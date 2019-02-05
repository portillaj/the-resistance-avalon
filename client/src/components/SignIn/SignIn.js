import React from 'react'
import { Button, Form, Grid, Header, Icon, Segment } from 'semantic-ui-react'

const SignIn = (props) => {
  return (
    <Grid textAlign='center' verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 600 }}>
        <Header as='h2' color='orange' textAlign='center'>
          <Icon name='user' /> Log-in to your account
        </Header>
        <Form size='massive' onChange={props.change} onSubmit={props.submit}>
          <Segment stacked>
            <Form.Input type='text' fluid icon='user' iconPosition='left' placeholder='Username' name='loginUsername' value={props.username}/>
            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' name='loginPassword' value={props.password}/>
            <Button color='orange' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default SignIn