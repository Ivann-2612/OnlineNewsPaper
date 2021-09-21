import React from 'react'
import './Categories.css'
import { useState } from 'react'
import { BrowserRouter as Router,Switch,Route, Link } from 'react-router-dom';
import ExpandCollapse from '../img/expand.png'
import Entertainment from '../categories/Entertainment'
import Sport from '../categories/Sport'
import Technology from '../categories/Technology'
import Health from '../categories/Health'
import Science from '../categories/Science'
import General from '../categories/General'
import GeneralAllNews from '../categories/GeneralAllNews'
import EntertainmentAllNews from '../categories/EntertainmentAllNews'
import SportAllNews from '../categories/SportAllNews'
import TechnologyAllNews from '../categories/TechnologyAllNews'
import HealthAllNews from '../categories/HealthAllNews'
import ScienceAllNews from '../categories/ScienceAllNews'


const Categories = () => {
    
    const [showCategory, setShowCategory] = useState(true)
    return (
        <Router>
        <h2 className='categories-h2'>Top 5 news by categories from GB</h2>
       <div className='categories-main'>
                
           <div className='category-wrapper'>
                <ul>
                   <li><Link to='/GeneralAllNews'  onClick={() => {setShowCategory(!showCategory)}}>General</Link></li><img onClick={() => {setShowCategory(!showCategory)}} src={ExpandCollapse} alt="expand"/>
                </ul>
               <div>
                    <General />
                    <div className="arrows prev"></div>
                    <div className="arrows next"></div>
               </div>
                <div className={showCategory ? 'show' : 'categories-main' }>
                
                <Switch>
                    <Route exact path="/generalallnews" component={GeneralAllNews}>
                       <GeneralAllNews />
                       <div className="arrows prev"></div>
                       <div className="arrows next"></div>
                    </Route>
                </Switch>
                </div>
               
           </div>
           <div className='category-wrapper'>
                <ul>
                    <li><Link to='EntertainmentAllNews' onClick={() => {setShowCategory(!showCategory)}}>Entertainment</Link></li><img onClick={() => {setShowCategory(!showCategory)}} src={ExpandCollapse} alt="expand"/>
                </ul>
               <div>
                    <Entertainment />
                    <div className="arrows prev"></div>
                    <div className="arrows next"></div>
               </div>
             <div className={showCategory ? 'show' : 'categories-main'}>
                 <Switch>
                    <Route exact path="/EntertainmentAllNews" component={EntertainmentAllNews}>
                       <EntertainmentAllNews />
                    </Route>
                </Switch>
             </div>
           </div>
           <div className='category-wrapper'>
               <div>
                  <ul>
                <li><Link to='SportAllNews' onClick={() => {setShowCategory(!showCategory)}}>Sport</Link></li><img onClick={() => {setShowCategory(!showCategory)}} src={ExpandCollapse} alt="expand"/>
                </ul> 
               </div>
                <div>
                     <Sport /> 
                     <div className="arrows prev"></div>
                    <div className="arrows next"></div>
                </div>
             
              <div className={showCategory ? 'show' : 'categories-main'}>
                  <Switch>
                    <Route exact path="/SportAllNews" component={SportAllNews}>
                       <SportAllNews />
                    </Route>
                </Switch>
              </div>
              
           </div>
           <div className='category-wrapper'>
               <div>
                    <ul>
                        <li><Link to='TechnologyAllNews' onClick={() => {setShowCategory(!showCategory)}}>Technology</Link></li><img onClick={() => {setShowCategory(!showCategory)}} src={ExpandCollapse} alt="expand"/>
                    </ul>
               </div>
                <div>
                    <Technology />
                    <div className="arrows prev"></div>
                    <div className="arrows next"></div>
                </div>
              
              <div className={showCategory ? 'show' : 'categories-main'}>
                  <Switch>
                    <Route exact path="/TechnologyAllNews" component={TechnologyAllNews}>
                       <TechnologyAllNews />
                    </Route>
                </Switch>
              </div>
           </div>
           <div className='category-wrapper'>
               <div>
                 <ul>
                    <li><Link to='HealthAllNews' onClick={() => {setShowCategory(!showCategory)}}>Health</Link></li><img onClick={() => {setShowCategory(!showCategory)}} src={ExpandCollapse} alt="expand"/>
                </ul>
               </div>
                <div>
                    <Health />
                    <div className="arrows prev"></div>
                    <div className="arrows next"></div>
                </div>
               
               <div className={showCategory ? 'show' : 'categories-main'}>
                   <Switch>
                    <Route exact path="/HealthAllNews" component={HealthAllNews}>
                       <HealthAllNews />
                    </Route>
                </Switch>
               </div>
           </div>
           <div className='category-wrapper'>
               <div>
                <ul>
                    <li><Link to='ScienceAllNews' onClick={() => {setShowCategory(!showCategory)}}>Science</Link></li><img onClick={() => {setShowCategory(!showCategory)}} src={ExpandCollapse} alt="expand"/>
                </ul>
               </div>
                <div>
                    <Science />
                    <div className="arrows prev"></div>
                    <div className="arrows next"></div>
                </div>
               
               <div className={showCategory ? 'show' : 'categories-main'}>
                  <Switch>
                    <Route exact path="/ScienceAllNews" component={ScienceAllNews}>
                       <ScienceAllNews />
                    </Route>
                </Switch> 
               </div>
           </div>
       </div>
       </Router>
    )
}

export default Categories
