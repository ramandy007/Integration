import React, { Component } from "react"

import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap"

class Navbars extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      isOpen: false,
      collapsed: true
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Navbar color="#ffffff" light expand="md" className="Navbar">
          <NavbarBrand style={{ color: "#fff" }}>
            Elective Management System
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/login" style={{ color: "#fff" }}>
                  login
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navbars
