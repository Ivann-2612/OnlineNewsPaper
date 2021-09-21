import React from 'react'
import './Nav.css'
import Categories from './Categories'
import { Switch,Route, Link } from 'react-router-dom'
import OneNews from './OneNews'
import OneNewsUs from './OneNewsUs'
import OneNewsGb from './OneNewsGb'
import NewsFromUS from './NewsFromUS'
import NewsFromGB from './NewsFromGB'
import OneNewsSearch from './OneNewsSearch'
import Homepage from './HomePage'
import Welcome from './Welcome'
import Search  from '../components/Search'
import { CgMenuLeftAlt } from 'react-icons/cg'
import { useState } from 'react'
import { HashRouter } from 'react-router-dom'


const Nav = () => {

  const [showNav, setShowNav] = useState(false) 

    return (
        <HashRouter basename='/'>
          <nav className={showNav ? 'nav' : 'nav active'}>
           
          <CgMenuLeftAlt className='giHam' onClick={() => {setShowNav(!showNav)}} />
          <h6>W-NEWS</h6>
            <ul>
                  <li><Link to="/homepage">Top News</Link></li>
                  <li><Link to='/categories' className='category'>Categories</Link></li>
                  <li><Link to="/search" className='category-search'>Search</Link></li>
                <div className='countries'>
                    <li><Link to='/NewsFromGB' id='gb'>GB</Link></li>
                    <li><Link to='/NewsFromUS' id='us'>US</Link></li>
                </div>
            </ul>
          </nav> 
          <Switch>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/search/:id">
             <OneNewsSearch /> 
           </Route>
            <Route exact path="/newsfromgb">
              <NewsFromGB />
            </Route>
            <Route exact path="/newsfromgb/:id">
             <OneNewsGb /> 
           </Route>
            <Route exact path="/newsfromus">
              <NewsFromUS />
            </Route>
            <Route exact path="/newsfromus/:id">
             <OneNewsUs /> 
           </Route>
            <Route exact path="/categories">
              <Categories />
            </Route>
             <Route exact path="/homepage">
              <Homepage />
            </Route>
            <Route exact path="/homepage/:id">
             <OneNews /> 
           </Route>
           <Route exact render={() => <Welcome />} />
        </Switch>
        </HashRouter>
    )
}

export default Nav
