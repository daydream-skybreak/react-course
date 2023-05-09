import React, {Component} from "react";
import {Jumbotron, Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from "reactstrap";
import {NavLink} from "react-router-dom";


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this)
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <>
                <Navbar dark expand='md'>
                    <div className='container'>
                        <NavbarBrand className='mr-auto' href='/'>
                            <img src="assets/images/logo.png" width='41' height='30'  alt="Restourante Con Fusion"/>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav}/>
                        <Collapse navbar isOpen={this.state.isNavOpen}>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink to='/home' className='nav-link'>
                                        <span className='fa fa-home fa-lg'>Home</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to='/about' className='nav-link'>
                                        <span className='fa fa-info fa-lg'>About Us</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to='/menu' className='nav-link'>
                                        <span className='fa fa-list fa-lg'>Menu</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to='/contact' className='nav-link'>
                                        <span className='fa-address-book fa-lg'>Contact Us</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className='container'>
                        <div className='row row-header'>
                            <div className='col-12 col-sm-6'>
                                <h1>Restorante con Fusion</h1>
                                <p>We take inspiration from the world's best cuisines, and create the best fusion
                                    experience. Our lipsmacking creation will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

            </>
        )
    }
}

export default Header
