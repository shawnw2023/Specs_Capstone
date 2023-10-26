import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import AuthContext from '../state/AuthContext'

const NewTeam = () => {
    const navigate = useNavigate()
    const goBack = () => navigate('/teams')
    const [name, setName] = useState("")

const {state} = useContext(AuthContext)

const handleChange = (e) => {
  setName(e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault()
  axios.post('/api/teams', {teamname: name, userId: state.id}).then((res) => {
    console.log(res.data);
  })
  console.log(name);
}

  return (
    <div className='new_team_screen'>
        <button className='new_team_btn' onClick={goBack}>
            {'<'} Back
        </button>
        <div className='new_team_inner'> 
        <h2>New Team</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"
         placeholder='Team Name'
         onChange={handleChange} />
         <button className='create_btn'>Create</button>
      </form>
         </div>
    </div>
  )
}

export default NewTeam
