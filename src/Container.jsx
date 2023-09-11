import { lazy } from 'react';
import { Routes, Route } from  'react-router-dom';

import Home from './components/Home';
import ScanShowcase from './components/ScanShowcase';
const TerrainShader = lazy(() => import('./components/TerrainShader'));
import BikeShema from './components/BikeShema';

function Container() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/3d-scan' element={<ScanShowcase />} />
      <Route path='/terrain-shader' element={<TerrainShader />} />
      <Route path='/bike' element={<BikeShema />} />
    </Routes>
  )
}

export default Container;