import React, { useState, useRef } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const CharCard = ({data, teams}) => {
  const [teamId, setTeamId] = useState('')
  const navigate = useNavigate()
  const MySwal = withReactContent(Swal)
  const teamRef = useRef()

  const handleClick = () => {
    navigate(`/charScreen/${data.id}`)
  }

 const addToTeam = () => {
    MySwal.fire({
      title: <h2>Which team?</h2>,
      showCancelButton: true,
      html: (
        <select ref={teamRef}>
          {teams.map((team) => {
            console.log(team);
            return <option value={team.id}>{team.teamname}</option>
          })}
        </select>
      )
    }).then((res) => {
      if (res.isConfirmed){
        console.log(teamRef.current.value);
        let body = {
          teamId: teamRef.current.value, 
          superhero_id: data.id
        }
        axios.post("/api/addCharacter", body)
        .then((res) => {
          console.log(res.data);
        })
      } else {
        console.log('canceled');
      }
    })
  }

  return (
    <div className="overall-char">
        <div className="char-card">
          <div>
              <div className="Char_card_container">
                  <img src={data?.images?.md} alt="character image" />
              </div>
              <h3>{data?.name}</h3>
          </div>
          <div className="lower_card">
          <button className="add_btn" onClick={addToTeam}>add to team</button>
          <button className="search_btn" onClick={handleClick}>See More</button>
          </div>
      </div>
    </div>
  );
};

export default CharCard;
