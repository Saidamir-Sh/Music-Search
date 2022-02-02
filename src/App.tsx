import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row, Col } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainSearch from './components/MainSearch';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';


function App() {
  return (
    <Container fluid={true} className='bg-dark w-100 vh-100'>
      <BrowserRouter>
        <Row>
            <Routes>
              <Route path='/' element={<MainSearch />} />
            </Routes>
            <Routes>
              <Route path='/' element={<SongList />}/>
            </Routes>
        </Row>
        <Routes>
          <Route path='/songdetail/:id' element={<SongDetail />} />
        </Routes>
      </BrowserRouter>
      
    </Container>
  );
}

export default App;
