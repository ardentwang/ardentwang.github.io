import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.component.scss";
import { ReactComponent as HomeLogo } from '../../assets/images/house.svg';
import { ReactComponent as WorkLogo } from '../../assets/images/work.svg';
import { ReactComponent as InfoLogo } from '../../assets/images/info.svg';
import { ReactComponent as ProjectLogo } from '../../assets/images/projects.svg';

const Navigation = () => {

    return (
        <Fragment>
          <div className='navigation'>
              <div className='nav-links-container'>
                <Link className='nav-link' to='/'>
                  <HomeLogo className='logo-container'/>
                  Home
                </Link>

                <Link className='nav-link' to='about'>
                  <InfoLogo className='logo-container'/>
                  About
                </Link>

                <Link className='nav-link' to='projects'>
                  <ProjectLogo className='logo-container'/>
                  Projects
                </Link>

                <Link className='nav-link' to='work'>
                  <WorkLogo className='logo-container'/>
                  Work
                </Link>
              </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;
