import React, { useState } from 'react'
import AllSupers from '../assets/AllSupers.jpg'

const CoolCard = ({char}) => {
    const [styled, setStyled] = useState(false)

    const applyStyles = () => {
        setStyled(true)
    }

    const removeStyles = () => {
        setStyled(false)
    }

  return (
    <div className={styled ? 'card hovering-card' : 'card'} onMouseEnter={applyStyles} onMouseLeave={removeStyles}>
      <img className={styled && 'dark-image'} src={char.images.md} alt="" />
      {
        styled
        &&
        <div className='card-info'>
            <h2>{char.name}</h2>
            <h2>STATS</h2>
            <h4>Intelligence: {char.powerstats.intelligence}</h4>
            <h4>Power: {char.powerstats.power}</h4>
            <h4>Strength: {char.powerstats.strength}</h4>
            <h4>Speed: {char.powerstats.speed}</h4>
            <h4>Combat: {char.powerstats.combat}</h4>
            <h4>durability: {char.powerstats.durability}</h4>
        </div>
      }
    </div>
  );
}

export default CoolCard
