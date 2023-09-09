import './navigation-styles.scss';
import { Outlet } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { Fragment } from 'react';
import {FaFoursquare} from 'react-icons/fa'




const Navigation=()=>{
    return(
      <Fragment>
      <div className='navigation-section'>
            <div className='links-section'>
                <a href='/'><FaFoursquare className='site-logo'/></a>
                <div className='links-div'>
                    <a href='/genres' className='link'>Genres</a>
                    <a href='/newfilms' className='link'>New Films</a>
                    <a href='/newepisodes' className='link'>New Episodes</a>
                </div>
            </div>
        <div className="search-area">
            <FaSearch className="search-logo"/> 
            <input placeholder='Search Movies and TV Series' type='search' className="search-field"/>
        </div>
        </div>
        <Outlet/>
      </Fragment>
    )  
}


export default Navigation;
  