import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { MainPage } from './components/mainpage';
import { CustomNavbar } from './components/navbar';

function App() {
  return (
    <div className="container-fluid p-0 m-0">
      <Row className="g-0">
        <Col md={3} className="p-0 m-0">
          <CustomNavbar />
        </Col>
        <Col md={9} className="p-0 m-0">
          <MainPage />
        </Col>
      </Row>
    </div>
  );
}

export default App;
