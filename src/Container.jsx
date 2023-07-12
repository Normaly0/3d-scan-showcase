import { lazy } from 'react';
import { Routes, Route } from  'react-router-dom';

import Home from './components/Home';
import ScanShowcase from './components/ScanShowcase';
const TerrainShader = lazy(() => import('./components/TerrainShader'));

function Container() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/3d-scan' element={<ScanShowcase />} />
      <Route path='/terrain-shader' element={<TerrainShader />} />
    </Routes>
  )
}

export default Container;