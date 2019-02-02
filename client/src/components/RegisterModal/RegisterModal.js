import React from 'react'
import { Button, Header, Form, Modal } from 'semantic-ui-react'

const RegisterModal = () => (
    <Modal trigger={<Button color='red' size='mini'>Register</Button>} style={{height: '80%'}} verticalAlign='middle' closeIcon>
    <Header icon='archive' content='Archive Old Messages' />
    <Modal.Content>
        <Form>
            <Form.Group widths='equal'>
                <Form.Input
                    fluid
                    id='form-subcomponent-shorthand-input-first-name'
                    label='First name'
                    placeholder='First name'
                />
                <Form.Input
                    fluid
                    id='form-subcomponent-shorthand-input-last-name'
                    label='Last name'
                    placeholder='Last name'
                />
            </Form.Group>
            <Form.Field>
                <label>Username</label>
                <input placeholder='Username' />
            </Form.Field>
            <Form.Field>
                <label>Email Address</label>
                <input placeholder='Email Address' />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input placeholder='Password' />
            </Form.Field>
            <Button color='red' fluid size='large'>
                Register Account
            </Button>
        </Form>
    </Modal.Content>
  </Modal>
)

export default RegisterModal