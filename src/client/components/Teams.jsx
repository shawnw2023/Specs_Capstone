import React, { useEffect, useContext, useState } from 'react'
import Team from './Team'
import axios from 'axios'
import AuthContext from '../state/AuthContext'

const Teams = () => {
  const [data, setData] = useState([])
  const {state} = useContext(AuthContext)

  const getData = () => {
    axios.get(`/api/teams/${state.id}`)
    .then((res) => {
      console.log(res.data)
      setData(res.data)
    })
  }
  
  useEffect(() => {
    getData()
  }, [])

  let display = data
  .sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })
  .map((team) => {
    return <Team team={team}/>
  })

  return (
    <div>
      {display}
    </div>
  )
}

export default Teams
