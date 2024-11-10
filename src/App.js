import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { LayoutDefault } from './layouts/layoutDefault';
import { InfoStory } from './pages/infoStory/infoStory';
import { DetailStory } from './pages/detailStory/detailStory';
import { PageNotFound } from './pages/404/404';

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route element={<LayoutDefault/>}>
            <Route path='/' element={<InfoStory/>}/>
            <Route path='/detail' element={<DetailStory/>}/>
          </Route>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
