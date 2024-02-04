import React from 'react'
import styled from 'styled-components'
import PizzaLogo from '../../public/assets/pizzaria.jpg'

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="navbar">
        <img src={PizzaLogo} alt="Logo" />
      </div>
    </NavbarWrapper>
  )
}

export default Navbar

const NavbarWrapper = styled.div`
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    height: 250px;
  }
`
