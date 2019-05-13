import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from '../constants/server';
import { Button, Form, FormGroup, Label, Input, Fade } from 'reactstrap';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmailChange = (e) => { this.setState({ email: e.target.value }); }

  handlePasswordChange = (e) => { this.setState({ password: e.target.value }); }

  handleSubmit = (e) => {
    e.preventDefault();
    // send data to server
    axios.post(`${SERVER_URL}/auth/login`, this.state)
    .then(response=> {
      console.log(response);
      // take token from response and set it in local storage
      localStorage.setItem('serverToken', response.data.token)
      // update user state info (in App.js)
      this.props.getUser();
    })
    .catch(err => {
      console.log('TODO: make error messages for user to see');
      console.log(err);
    })
  }

  render() {
    if(this.props.user && this.props.user.role !== 'admin'){
      return (<Redirect to="/profile" />);
    } else if(this.props.user && this.props.user.role === 'admin'){
      return (<Redirect to="/adminprofile" />);
    }
    return(
      <div>
        <h2>Log In</h2>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="Email">Email</Label>
            <Input type="email" 
                    name="email" 
                    id="email" 
                    placeholder="example@email.com" 
                    value={this.state.email} 
                    onChange={this.handleEmailChange} />
          </FormGroup>
          <FormGroup row>
                <Label for="Password">Password</Label>
                <Input type="password" 
                        name="password" 
                        id="password" 
                        placeholder="shhhh" 
                        onChange={this.handlePasswordChange} />
          </FormGroup>
            <div>
              <Button outline color="secondary" size="lg" onClick={this.toggle}>Log In</Button>
              <Fade in={this.state.fadeIn} tag="h5" className="mt-3"></Fade>
            </div>
          </Form>
        </div>
      );
    }
  };

export default Login;
