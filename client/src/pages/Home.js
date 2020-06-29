import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./style.css"

class Home extends Component {

    render() {
        return(
        <div>
            <Container fluid>
                <Row>
                <Col size="md-12">
                    <Navbar />
                    <Jumbotron>
                    <h1>KAIBRU</h1>
                    <h2>Your One-stop Hub for Sustainably-sourced Products and Services</h2>
                    </Jumbotron>
                </Col>
                </Row>

                <Row fluid>
                <Col size="md-12">
                {/* Placeholder for when the user signs in - user model needs to be created first with sequelize */}
                <div className="container-fluid styleHomePage">
                <h5 style={{textAlign: "center"}}>
                &nbsp;
                &nbsp;
                Hello there, <br/>
                &nbsp;
                &nbsp;
                Have you ever found yourself thinking that you would like to make a bigger effort in contributing to sustainable products and services? <br/>
                &nbsp;
                &nbsp;
                Have you found it difficult to commit because you simply do not know your options or where to find them or even keep track of them? <br/>
                &nbsp;
                &nbsp;
                Well, Kaibru is the place you can come to if you would like to find a variety of products or services that are sustainable and safe all in one place!<br/>
                &nbsp;
                &nbsp;
                Kaibru is a recently deployed web application so it is still in beta phase!<br/>
                &nbsp;
                &nbsp;
                This means that we are currently only featuring <b>one</b> potential website at the moment.<br/>
                &nbsp;
                &nbsp;
                However, we are in the process of scoping other websites and building them out.<br/>
                &nbsp;
                &nbsp;
                While in beta phase, feel free to send us your recommendations (please head over to our "About Us" section for more information on this)<br/>
                &nbsp;
                &nbsp;
                In the meantime, happy browsing and thank you for remembering our environment! <br/>
                &nbsp;
                &nbsp;  
                </h5>
                </div>
                </Col>
                </Row>
                <Footer />
            </Container>
        </div>
    )
}
}

export default Home;