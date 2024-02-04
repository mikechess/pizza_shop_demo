import React from 'react'
import styled from 'styled-components'
import menu from "../../menu.json"

interface PizzaType {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
}

const Menu = () => {
  return (
    <MenuWrapper>
        {menu.map((pizza: PizzaType) => (
            <div className='menuContainer' key={pizza.id}>
                <img src={pizza.image} alt="" />
                <div className="topInfo">
                    <h1>{pizza.name}</h1>
                    <p>{pizza.description}</p>
                    <h2>{pizza.price}</h2>
                </div>
            </div>
        ))}
    </MenuWrapper>
  )
}

export default Menu

const MenuWrapper = styled.div`
`