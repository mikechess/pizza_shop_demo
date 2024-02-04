import React from 'react'
import styled from 'styled-components'
import PizzaLogo from '../../public/assets/pizzaria.jpg'

const categories = ['All', 'Chicken', 'Vegetarian', 'Meat']

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="navbar">
        <img src={PizzaLogo} alt="Logo" />
      </div>

      <div className="categories">
        <div className="tags">
          {categories.map((category) => (
            <h3 key={category}>{category}</h3>
          ))}
        </div>
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

  .categories {
    display: flex;
    flex-direction: column;
    align-items: center;

    .tags {
      font-family: 'Poppins', sans-serif;
      width: 50%;
      display: flex;
      justify-content: space-around;
      .active {
        background-color: black;
        color: white;
      }

      h3 {
        color: black;
        box-shadow: 0 10px 15px rgb(0 0 0 /20%);
        box-sizing: border-box;
        border-radius: 5px;
        padding: 5px 10px;
        background-color: white;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
          background-color: black;
          color: white;
        }
      }
    }
  }
`
