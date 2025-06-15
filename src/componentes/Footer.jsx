import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <footer className="bg-dark py-3">
      <Container>
        <Row>
          <Col md={6}>
            <p className="text-secondary">&copy; {new Date().getFullYear()} La Academia - Ana Camila Aguirre Chuquimia</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;