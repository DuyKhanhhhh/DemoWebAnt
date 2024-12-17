import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Home from './react/page/Home';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
