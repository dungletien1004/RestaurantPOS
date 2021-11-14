import React, { Component } from 'react';
import "./ManagerSignIn.css"
import { Form, Button } from 'react-bootstrap';

class ManagerSignIn extends React.Component {

    state = {
        email: "",
        password: "",
        accounts: [
            {email: "hieu.dang.dth_is_me@hcmut.edu.vn",
            password: "asd123"}
        ]
      };
    
      handleChange = e => {
        this.setState({ [e.currentTarget.id]: e.currentTarget.value });
      };


      setEmail = (e) => 
      {
          this.setState({email: e});
      }

      setPassword = (p) => 
      {
          this.setState({password: p});
      }
    
      validateForm = () =>
      {
        return false ? (this.state.email === "" || this.state.password == "") : true;
      }

      render() {
        return (
            <div className="Login">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  autoFocus
                  type="email"
                  value={this.state.email}
                  onChange={(e) => this.setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={this.state.password}
                  onChange={(e) => this.setPassword(e.target.value)}
                />
              </Form.Group>
              <Button block size="lg" className="mx-5 my-5" type="submit" disabled={!this.validateForm()}>
                Login
              </Button>
            </Form>
          </div>
        );
    }
}
 
export default ManagerSignIn;