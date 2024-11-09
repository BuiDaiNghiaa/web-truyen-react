import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { LayoutDefault } from './layouts/layoutDefault';
import { InfoStory } from './pages/infoStory/infoStory';
import { DetailStory } from './pages/detailStory/detailStory';

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route element={<LayoutDefault/>}>
            <Route path='/' element={<InfoStory/>}/>
            <Route path='/detail' element={<DetailStory/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
