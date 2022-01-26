import { BrowserRouter as Router, Routes as Switch, Route, Navigate, Link } from 'react-router-dom';

import { Home } from './assets/components/Home/Home';
import { About } from './assets/components/About/About';
import { Contact } from './assets/components/Contact/Contact';
import { Navbar } from './assets/components/Navbar';
import { pages } from './assets/components/PageDetails';
import './assets/styles/global.scss';
import { Button, Col } from 'reactstrap';
import { notFoundError } from './assets/utils/Errors';
import { useState } from 'react';

const App = () => {
  const [selectedPage, selectPage] = useState([]);

  function renderNavItems() {
    console.log(JSON.stringify(window.location.pathname))
    return pages.map(page => {
      let classname = page.id === selectedPage ?
        'navbar-selected col' : 'navbar-btn col';
      let onClick = page.id === selectedPage ?
        null : ()=> selectPage(page.id);
      
      return (
        <Link className={classname} key={'nav-'+page.id} to={'/'+page.id} onClick={onClick}>
            {page.text?.short || page.text?.long || page.title || '?'}
        </Link>
    )});
  }

  function renderPages() {
    return pages.map((page, index)=> {
      return (
        <Route key={'path-'+index}
          exact path={'/' + page.id}
          element={
            page.id === 'home'?  <Home /> :
            page.id === 'about'?   <About /> :
            page.id === 'contact'? <Contact /> :
            notFoundError({})
          }
        />
      );
    });
  }

  return (
    <div className='APP'>
      <Router>
        <Navbar>
          {renderNavItems()}
        </Navbar>
        <Switch>
          <Route exact path='/' element={<Navigate to='/home' />} />
          {renderPages()}
          <Route exact path='*' element={notFoundError({name: window.location.href})} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
