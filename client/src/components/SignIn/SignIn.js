import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const FormExampleForm = () => (
  <Form>
    <Form.Field>
      <label>Username</label>
      <input placeholder='Username'/>
    </Form.Field>
    <Form.Field>
      <label>Email Address</label>
      <input placeholder='Email Address'/>
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default FormExampleForm