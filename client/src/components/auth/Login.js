import React, { Component } from 'react';
import { Col, Row, Container } from "../Grid";
import Navbar from "../Navbar";
import Footer from "../Footer";
//import Login from "../components/Login";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authAction";
import classnames from "classnames";
import "./Login.css"
//import API from "../utils/API";

class Log extends Component {
  constructor() {
    super()
this.state = {
    firstname:"",
    lastname:"",
    email:"",
    password: "",
    errors: {}
};
}
//Place logic here
componentDidMount() {
  //If logged in and user navigates to Login page, should redirect them to dashboard/home page
  if(this.props.auth.isAuthenticated) {
    this.props.history.push("/logout");
  }
}

componentWillReceiveProps(nextProps) {
  if(nextProps.auth.isAuthenticated) {
    this.props.history.push("/logout");
  }
  if (nextProps.errors) {
    this.setState({
      errors: nextProps.errors
    })
  }
}

onChange = e => {
  this.setState({ [e.target.id]: e.target.value });
};

onSubmit = e => {
  e.preventDefault();

  const userData = {
    firstname: this.state.firstname,
    lastname: this.state.lastname,
    email: this.state.email,
    password: this.state.password
  };

  this.props.loginUser(userData);
};

render() {
  const { errors } = this.state;
    return(

    
    <Container fluid>
    <Navbar />
    <Row>
    
    <Col size="lg-4 sm-12">
    

    <div className="login styleLoginWrap">
    <div className="login-container styleLoginSubWrap">

    
    <form className="login styleLogin" noValidate onSubmit={this.onSubmit}>

        <div className="form-group">
            <label htmlFor="title"><h4>LOGIN</h4></label>
            <input
                onChange={this.onChange}
                id="firstname"
                type="text"
                placeholder="First name"
                value={this.state.firstname}
                required
                className={classnames("", {
                  invalid: errors.firstname || errors.firstnamenotfound
                })}
            />

            <input
                onChange={this.onChange}
                id="lastname"
                type="text"
                placeholder="Last name"
                value={this.state.lastname}
                required
                className={classnames("", {
                  invalid: errors.lastname || errors.lastnamenotfound
                })}
            />

            <input
                onChange={this.onChange}
                id="email"
                type="email"
                placeholder="Email"
                value={this.state.email}
                required
                className={classnames("", {
                  invalid: errors.email || errors.emailnotfound
                })}
            />

            <input
                onChange={this.onChange}
                id="password"
                type="password"
                placeholder="Password"
                value={this.state.password}
                required
                className={classnames("", {
                  invalid: errors.password || errors.passwordincorrect
                })}
            />

            <button
            className="btn searchBtn"
            type="submit"
            >
            Login
            </button>
        </div>
    </form>
</div>
</div>

    {/* <Login
        onChange={this.onChange}
        firstname={this.state.logfirstname}
        lastname={this.state.loglastname}
        username={this.state.logusername}
        password={this.state.logpassword}
        error={errors.logusername}
    /> */}
    
    </Col>
    </Row>
    <Footer />
    </Container>
)
}

}

Log.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Log);
