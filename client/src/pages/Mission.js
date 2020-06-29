import React from "react";
import { Container, Row, Col } from "../components/Grid"
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
    return (
        <div>
        <Container fluid>
            <Row>
                <Col size ="md-12">
                <Navbar />
                <Jumbotron>
                <h1>Our Mission Statement</h1>
                </Jumbotron>
                </Col>
            </Row>

            <Row>
                <Col size = "md-12">
                <div className="container-fluid styleMissionPage">
                <h1 style={{textAlign: "center"}}>Making a Difference!</h1>
                <h5 style={{textAlign: "center"}}>
                Our aim is quite simple. We would like to create a safe space which allows for more mindful or meaningful consumerism with consideration for environmental and social improvement.<br/>
                &nbsp;
                &nbsp;
                Even though our platform will evolve over time, this is our base goal. <br/>
                &nbsp;
                &nbsp;
                In no way is this platform meant to force or manipulate anyone into feeling badly about their current spending habits. <br/>
                &nbsp;
                &nbsp;
                As the creators of this platform, even our habits can be improved on a daily basis :). <br/>
                &nbsp;
                &nbsp;
                As consumers, we collectively have the power to enact and enforce change, alongside holding corporations responsible for how they scale and produce. <br/>
                &nbsp;
                &nbsp;
                We believe that with all things considered, large-scale production should never be done wholly at the expense of the environment or social well-being. <br/>
                &nbsp;
                &nbsp;
                This is why our platform highlights responsible businesses which have these concepts woven into the fabric of their own company mission or vision. <br/>
                &nbsp;
                &nbsp;
                By bringing them together in one hub, this makes it easier for consumers to select from a  wider variety, while raising awareness of the businesses out there trying to make a difference!
                </h5>
                </div>
                </Col>
            </Row>
            
            {/* <Row>
                <Col size = "md-12">
                <div className="container-fluid styleHomePage">
                <h5>More content here</h5>
                </div>
                </Col>
            </Row> */}
            
            <Footer />
        </Container>
        </div>     
    )
}

export default About;