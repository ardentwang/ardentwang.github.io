import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import About from './routes/about/about.component';
import Contact from './routes/contact/contact.component';
import Projects from './routes/projects/projects.component';
import Work from './routes/work/work.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='projects' element={<Projects/>} />
          <Route path='work' element={<Work/>} />
        </Route>
    </Routes>
    </div>
  );
}

export default App;
