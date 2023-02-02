import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/home.page';
import Hotel from './pages/hotel/hotel.page';
import List from './pages/list/list.page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<List />} />
        <Route path='/hotels/:hotelID' element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
