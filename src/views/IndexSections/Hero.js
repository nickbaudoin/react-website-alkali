/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, CardBody, Badge, Card } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
           <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250" style={{backgroundImage: "linear-gradient(to right, rgba(24,192,255,1), rgba(175,233,255,1))"
}}>
            <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="10">
                      <h1 className="display-1 text-white">
                        CALL TO ACTION <br></br>{""}
                        NEXT LINE
                      </h1>
                      <p className="lead text-white">
                        The design system comes with four pre-built pages to
                        help you get started faster. You can change the text and
                        images and you're good to go.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1" style={{color:"rgba(24,192,255,1)"}}>
                            <i className="ni ni-chat-round" />
                          </span>
                          <span className="btn-inner--text" style={{color:"#757575"}}>
                            Contact Us
                          </span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4" style={{backgroundColor:"#00baff"}}>
                            <i className="ni ni-settings" style={{color:"#ffffff"}}/>
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Website Development
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1" style={{backgroundColor:"#00baff"}}>
                              design
                            </Badge>
                            <Badge color="primary" pill className="mr-1" style={{backgroundColor:"#00baff"}}>
                              development
                            </Badge>
                            <Badge color="primary" pill className="mr-1" style={{backgroundColor:"#00baff"}}>
                              maintenance
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4" style={{backgroundColor:"#00baff"}}>
                            <i className="ni ni-notification-70" style={{color:"#ffffff"}}/>
                          </div>
                          <h6 className="text-success text-uppercase">
                            Search Optimization
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1" style={{backgroundColor:"#00baff"}}>
                              on-site
                            </Badge>
                            <Badge color="success" pill className="mr-1" style={{backgroundColor:"#00baff"}}>
                              off-site
                            </Badge>
                            <Badge color="success" pill className="mr-1" style={{backgroundColor:"#00baff"}}>
                              technical
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4" style={{backgroundColor:"#00baff"}}>
                            <i className="ni ni-mobile-button" style={{color:"#ffffff"}}/>
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Social Media
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1" style={{backgroundColor:"#00baff"}}>
                              content
                            </Badge>
                            <Badge color="warning" pill className="mr-1" style={{backgroundColor:"#00baff"}}>
                              management
                            </Badge>
                            <Badge color="warning" pill className="mr-1" style={{backgroundColor:"#00baff"}}>
                              automation
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
