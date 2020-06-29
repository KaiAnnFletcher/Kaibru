import React, { Component } from 'react';
import { Col, Row, Container } from "../Grid";
import Navbar from "../Navbar";
import Footer from "../Footer";
//import Signup from "../components/Signup";
import "./Signup.css";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authAction";
import classnames from "classnames";
//import API from "../utils/API";

class Sign extends Component {
  constructor() {
    super();
    this.state = {
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        errors: {}
    };
  }

//logic goes here
componentDidMount() {
  //If logged in and user navigates to Register, should redirect them to dashboard/homepage
  if(this.props.auth.isAuthenticated) {
    this.props.history.push("/logout");
  }
}

componentWillReceiveProps(nextProps){
  if(nextProps.errors) {
    this.setState({
      errors: nextProps.errors
    });
  }
}

onChange = e => {
  this.setState({ [e.target.id]: e.target.value });
};

onSubmit = e => {
  e.preventDefault();

const newUser = {
  firstname: this.state.firstname,
  lastname: this.state.lastname,
  email: this.state.email,
  password: this.state.password
};
this.props.registerUser(newUser, this.props.history);
};

render() {
  const { errors } = this.state
    return (

      <Container fluid>
        <Navbar />
        <Row>
            <Col size="lg-4 sm-12">
              

            <div className="login styleLoginWrap">
           <div className="login-container styleLoginSubWrap">

    <form className="register styleRegister" noValidate onSubmit={this.onSubmit}>

            <div className="form-group">
                <label htmlFor="title"><h4>SIGNUP</h4></label>
                <input
                onChange={this.onChange}
                id="firstname"
                type="text"
                placeholder="enter firstname"
                value={this.state.firstname}
                error={errors.firstname}
                required
                className={classnames("", {
                  invalid: errors.firstname
                })}
                />

                <input
                onChange={this.onChange}
                id="lastname"
                type="text"
                placeholder="enter lastname"
                value={this.state.lastname}
                error={errors.lastname}
                required
                className={classnames("", {
                  invalid: errors.lastname
                })}
                />

                <input
                onChange={this.onChange}
                id="email"
                type="text"
                placeholder="enter email"
                value={this.state.email}
                error={errors.username}
                required
                className={classnames("", {
                  invalid: errors.email
                })}
                />

                <input
                onChange={this.onChange}
                id="password"
                type="password"
                placeholder="choose a password"
                value={this.state.password}
                error={errors.password}
                required
                className={classnames("", {
                invalid: errors.password || errors.passwordnotfound
                })}
                />

                <button
                className="btn searchBtn"
                type="submit"
                onClick={this.onChange}>
                Submit
                </button>
            </div>
    </form>

    </div>
    </div>
              {/* <Signup
                onChange={this.onChange}
                firstname={this.state.regfirstname}
                lastname={this.state.reglastname}
                username={this.state.regusername}
                password={this.state.regpassword}
                error={errors.regusername}
                /> */}
              
            </Col>
        </Row>
        <Footer />
    </Container>
    )
}
}

Sign.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});


export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Sign))