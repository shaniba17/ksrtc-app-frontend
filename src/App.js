import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddBus from './components/AddBus';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import SearchBus from './components/SearchBus';
import ViewBus from './components/ViewBus';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddBus/>}/>
      <Route path='/search' element={<SearchBus/>}/>
      <Route path='/view' element={<ViewBus/>}/>
      </Routes></BrowserRouter>
  );
}

export default App;

