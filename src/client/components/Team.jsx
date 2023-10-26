import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CoolCard from './CoolCard'




const Team = ({team}) => {

  const [characters, setCharacters] = useState([])


  useEffect(() => {
    if(team.characters.length === 0) return;
    axios.all(
      team.characters.map((char) => {
        return axios.get(`https://akabab.github.io/superhero-api/api/id/${char.superhero_id}.json`).then((res) => {
        return res.data
        })
      })
    ).then((responses) => {
      setCharacters(responses)
    })
  }, [])


  console.log(characters)
  return (
    <div className='teams_div'>
      <h1>{team.teamname}</h1>
      <div className='team_img_cont'>
      {
        characters.map((char) => {
          return <CoolCard char={char}/>
        })
      }
      </div>
      {/* <img src={allSupers} alt="" /> */}
    </div>
  )
}

export default Team
