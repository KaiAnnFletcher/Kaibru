import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Row, Col } from "../components/Grid"

class About extends Component {
    render() {
        return(
        <div>
        <Container fluid>
            <Row>
                <Col size ="md-12">
                <Navbar />
                <Jumbotron>
                <h1>ABOUT US</h1>
                </Jumbotron>
                </Col>
            </Row>

            <Row>
                <Col size = "md-12">
                <div className="container-fluid styleAboutUsPage">
                <h1 style={{textAlign: "center"}}>Who Are We?</h1>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <h2 style={{textAlign: "center"}}>Bruno Mazzitelli</h2>
                <h5 style={{textAlign: "center"}}>Lead Visionary and Content Strategist</h5>
                <h5 style={{textAlign: "center"}}>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                With years of leadership and management experience in the corporate sector, Bruno has played a crucial role in directing the path and planning stages for this project. <br/>
                &nbsp;
                &nbsp;
                Kaibru's planning started late in 2018 and since then has taken many forms. This is the closest the team has come to having a solid, finished product.<br/>
                &nbsp;
                &nbsp;
                With that in mind, there is still more work to be done and he is excited to continue charting Kaibru's course!
                </h5>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <h2 style={{textAlign: "center"}}>Kai-Ann Fletcher</h2>
                <h5 style={{textAlign: "center"}}>Principal Developer</h5>
                <h5 style={{textAlign: "center"}}>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                With roughly two years of full-stack (MERN) development experience under her belt, Kai-Ann enjoys building various projects while learning new concepts. <br />
                &nbsp;
                &nbsp;
                Building Kaibru from the ground up using strictly JavaScript frameworks was not quite an easy process, but the team decided that it would make the vision and mission more meaningful. <br/>
                &nbsp;
                &nbsp;
                With that in mind, Kai-Ann is excited to continue the building phase for Kaibru and is also excited to see the platform grow over time.
                </h5>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <h2 style={{textAlign: "center"}}>Contact Us</h2>
                <h5 style={{textAlign: "center"}}>
                To report bugs or make recommendations for future features, please contact us at kb.ideas1@gmail.com
                </h5>
                </div>
                </Col>
            </Row>
            
            {/* <Row>
                <Col size = "md-12">
                <h1>Bruno Mazzitelli</h1>
                <p>Lead Visionary and Content Strategist</p>
                </Col>
            </Row>
            
            <Row>
                <Col size = "md-12">
                <h1>Kai-Ann Fletcher</h1>
                <p>Principal Developer</p>
                </Col>
            </Row> */}
            <Footer />
        </Container>
        </div>
        
    )
}
}

export default About;