import React from 'react';
import { Container, Row } from 'reactstrap';

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer" style={{direction: "rtl" , textAlign: "center"}}>
                <Container fluid>
                    <Row>
                            <div className="text-sm-start d-none d-sm-block" >
طراحی شده توسط همیار CRM                            </div>
                    </Row>
                </Container>
            </footer>
        </React.Fragment>
    );
};

export default Footer;