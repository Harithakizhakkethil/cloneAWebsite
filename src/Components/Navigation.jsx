import React from 'react'
import { Navbar } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import SearchIcon from '@mui/icons-material/Search';
import './Navigation.css'


function Navigation() {
    return (
        <div className='nav-container'>
            <Navbar className='navigation'>
                <img className='navigation_logo' src="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png" alt="logo" />
                <h4 className='text-white' style={{ fontSize: '13px', paddingRight: '18px', paddingLeft: '15px', fontWeight: '300', paddingTop: '10px' }}>Deliver  to <br />   <span style={{ fontSize: '18px', fontWeight: '600' }}> <i class="fa-solid fa-location-dot"></i>India</span></h4>
                <Dropdown className='text-light' >
                    <Dropdown.Toggle className='dropdown' style={{ height: '40px', fontSize: '15px', position: 'Top', alignItems: 'center', color: 'black', backgroundColor: 'lightgrey', borderRadius: '5px 0px 0px 5px' }} variant="Secondary" >All</Dropdown.Toggle>
                    <Dropdown.Menu >
                        <Dropdown.Item href="#/action-1">Arts & Crafts</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Automotive</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Baby</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Beauty & Personal Care</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Books</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Boy's Fashion</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Computers</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Deals</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <div className='navigation_search'>
                    {/*  <Form.Control placeholder="Search Amazon" aria-label="Username" aria-describedby="basic-addon1" />  */}
                    <input type="text" className='navigation_searchInput' placeholder="Search Amazon" />
                    <SearchIcon className='navigation_searchIcon ' />
                    <Dropdown className='text-light' >
                        <Dropdown.Toggle className='dropdown' style={{ height: '40px', fontSize: '15px', position: 'Top', alignItems: 'center', color: 'white', backgroundColor: 'none', borderRadius: '5px 0px 0px 5px', fontWeight: '600', paddingRight: '0px' }} variant="Secondary" > <img style={{ width: '30px', paddingRight: '8px' }} src="https://cdn.britannica.com/76/4476-050-E643DD49/Betsy-Ross-legend-flag-united-states.jpg" alt="" />EN</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className='navigation_options'>
                    <Dropdown className='text-light' >
                        <Dropdown.Toggle className='dropdown' style={{ height: '60px', fontSize: '15px', position: 'Top', alignItems: 'center', color: 'white', backgroundColor: 'none', borderRadius: '5px 0px 0px 5px', fontWeight: '600', paddingLeft: '0px', paddingRight: '0px' }} variant="Secondary" ><span style={{ fontSize: '11px', alignItems: 'start', display: 'flex' }}>Hello,Sign In</span>   Account & Lists</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className='Returns'>
                    <p style={{ color: 'white', fontSize: '12px' }}> Returns<span className='order'> & Orders</span></p>
                </div>
                <div className='cart'>
                    <i class="fa-solid fa-cart-shopping"></i>cart
                </div>
            </Navbar>
        </div>

    )
}

export default Navigation