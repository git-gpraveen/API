import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import User from './Components/Pages/User';
import Post from './Components/Pages/Post';
import Comment from './Components/Pages/Comment';
import Form from './Components/Form/Form';
// import NavbarMain from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Routes>
        <Route path='/' element={<User/>} />
        <Route path='/post' element={<Post/>} />
        <Route path='/comment' element={<Comment/>} />
        <Route path='/form' element={<Form/>} />
       </Routes>
    </div>
  );
}

export default App;
