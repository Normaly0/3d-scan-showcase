import { Routes, Route } from  'react-router-dom';

import Home from './components/Home';
import ScanShowcase from './components/ScanShowcase';

function Container() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/3d-scan' element={<ScanShowcase />} />
    </Routes>
  )
}

export default Container