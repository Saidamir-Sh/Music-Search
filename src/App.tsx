import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row, Col } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainSearch from './components/MainSearch';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';


function App() {
  return (
    <Container fluid={true}>
      <BrowserRouter>
        <Row>
          <Col md={12}>
            <Routes>
              <Route path='/' element={<MainSearch />} />
            </Routes>
          </Col>
          <Col md={12}> 
            <Routes>
              <Route path='/' element={<SongList />}/>
            </Routes>
          </Col>
        </Row>
        <Routes>
          <Route path='/songdetail/:id' element={<SongDetail />} />
        </Routes>
      </BrowserRouter>
      
    </Container>
  );
}

export default App;
