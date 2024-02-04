import React from 'react'
import styled from 'styled-components'
import { PizzaType } from './Menu'

interface PizzaItemsProps {
  allItems: PizzaType
  closePopup: () => void
}

const PizzaOverlay: React.FC<PizzaItemsProps> = ({ allItems, closePopup }) => {
  return (
    <Overlay>
      <div className="pizzaMenu">
        <img src={allItems.image} alt="" />
        <h2>{allItems.name}</h2>
        <p>{allItems.description}</p>

        <div className="bottomArea">
          <div className="priceArea">
            <button>-</button>
            <h3>${allItems.price}</h3>
            <button>+</button>
          </div>
          <div className="cartButtons">
            <button>Add To Cart </button>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      </div>
    </Overlay>
  )
}

export default PizzaOverlay

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1f1e1eb7;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  box-shadow: 0 10 15px egbg(0 0 0 /20%);
  color: black;
  box-sizing: border-box;

  .pizzaMenu {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5px;
    margin: 5px;
    box-shadow: 1px 1px 6px -2px grey;

    img {
      height: 400px;
      width: 400px;
    }

    h2 {
      font-family: 'Roboto', sans-serif;
      font-size: 2em;
    }

    p {
      width: 18em;
      color: red;
      text-overflow: ellipsis;
      text-align: center;
      font-family: 'Poppins', sans-serif;
    }
  }

  .bottomArea {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 130px;

    .priceArea {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 50%;

      button {
        background: #d93333;
        border: none;
        font-size: 1.2rem;
        width: 20%;
        cursor: pointer;
        color: white;
        transition: all 0.1s ease-in-out;
        transform: scale(0.9);

        &:hover {
          background: #000;
          transform: scale(1);
        }
      }
    }

    .cartButtons {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      padding: 10px;

      button {
        border: none;
        border-radius: 5px;
        padding: 10px;
        background: #ff6c22;
        color: white;
        font-size: 40px;
        cursor: pointer;
      }
      button:nth-child(2) {
        background: #da0cb1;
      }
    }
  }
`
