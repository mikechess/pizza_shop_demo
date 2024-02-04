import styled from 'styled-components'
import menu from '../../menu.json'
import React from 'react'
import PizzaOverlay from './PizzaOverlay'

export interface PizzaType {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
}

interface Category {
  selectedCategory: string
}

const Menu: React.FC<Category> = ({ selectedCategory }) => {

    const [selectedPizza, setSelectedPizza] = React.useState<PizzaType | null >(null)

    const openOverlay = (pizza: PizzaType) => {
        setSelectedPizza(pizza)
    }

    const closeOverlay = () => {
        setSelectedPizza(null)
    }

  //filter the menu based on selected category
  const filteredMenu =
    selectedCategory === 'All'
      ? menu
      : menu.filter((pizza) => pizza.category === selectedCategory)

  return (
    <MenuWrapper>
      {filteredMenu.map((pizza: PizzaType) => (
        <div className="menuContainer" key={pizza.id} onClick={() => openOverlay(pizza)}>
          <img src={pizza.image} alt="" />
          <div className="topInfo">
            <h1>{pizza.name}</h1>
            <p>{pizza.description}</p>
            <h2>{pizza.price}</h2>
          </div>
        </div>
      ))}

      {selectedPizza && (
        <PizzaOverlay allItems={selectedPizza} closePopup={closeOverlay} />
      )}
    </MenuWrapper>
  )
}

export default Menu

const MenuWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: white;

    .menuContainer {
        display: flex;
        width: 40%;
        background-color: white;
        margin: 20px;
        border-radius: 20px;
        box-shadow: 1px 1px 10px -2px grey;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        transform: scale(.9);

        &:hover {
            box-shadow: 1px 1px 10px -2px red;
            transform: scale(1);
        }

        >img {
            height: auto;
            width: 200px;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
        }

        .topInfo {
            width: 100%;
            margin-left; 10px;
            padding: 10px;

            h1 {
                font-family: 'Roboto', sans-serif;
            }

            p {
                font-family: 'Poppins', sans-serif;
                max-height: 3.4em;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            h2 {
                font-size: 1.5rem;
                padding: 10px;
                font-family: 'Roboto', sans-serif;
                text-align: right;
            }
        }
    }

    @mdeia (max-width: 1168px) {
        .menuContainer {
            width: 100%;
            margin: 10px;
        }
    }
`
