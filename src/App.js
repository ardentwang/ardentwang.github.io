import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import About from './routes/about/about.component';
import Contact from './routes/contact/contact.component';
import Projects from './routes/projects/projects.component';
import Work from './routes/work/work.component';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  const element = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
    { path: '/projects', element: <Projects /> },
    { path: '/work', element: <Work /> },
  ]);

  return (
    <div>
      <Navigation />
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={300}
        >
          {element}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;
