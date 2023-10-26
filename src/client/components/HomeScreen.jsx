import React from 'react'
import CharCard from './CharCard'
import { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import AuthContext from '../state/AuthContext'

const HomeScreen = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [teams, setTeams] = useState([])
  const {state} = useContext(AuthContext)

  const getData = () => {
    axios.get('https://akabab.github.io/superhero-api/api/all.json')
    .then((res) => {
      console.log(res.data)
      setData(res.data)
    })

    axios.get(`/api/teams/${state.id}`)
    .then((res) => {
      console.log(res.data)
      setTeams(res.data)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  let charDisplay = data
    .filter((char) => {
      return(char.name.toLowerCase().includes(search.toLowerCase()))
    })
  .map((char) => {
    return (
      <CharCard data = {char} teams={teams}/>
    )
  })

  return (
    <div className='home_spacing'>
      <div className='search'>
        <input placeholder='search'
        onChange={(e) => {
          setSearch(e.target.value)
        }} />
      </div>
      <div className='home-cards'>
       {charDisplay}
      </div>
    </div>
  )
}

export default HomeScreen
