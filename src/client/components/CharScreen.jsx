import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProgressBar from "./ProgressBar";

const CharScreen = () => {

    const { id } = useParams()

    const [data, setData] = useState([])

  const getData = () => {
    axios.get(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
    .then((res) => {
      console.log(res.data)
      setData(res.data)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="character-screen">
          <div className="character-img">
            <h2>{data.name}</h2>
            <img src={data?.images?.lg} alt="" />
          </div>
          <div> 

        <div className="character-card">
          <div className="character-info">
            <h2>Biography</h2>
            <p>Aliases: {data?.biography?.aliases.map((a, i, arr) => {
              if (i === arr.length - 1) {
                return a
              } else {
                return `${a}, `
              }
            })}</p>
            <p>Alignment: {data?.biography?.alignment}</p>
            <p>Alter Egos: {data?.biography?.alterEgos}</p>
            <p>First Appearance: {data?.biography?.firstAppearance}</p>
            <p>Full Name: {data?.biography?.fullName}</p>
            <p>Place of Birth: {data?.biography?.placeOfBirth}</p>
            <p>Publisher: {data?.biography?.publisher}</p>
          </div>
          <div className="more-info">
            <div className="appearance">
            <h2>Appearance</h2>
            <p>Eye Color: {data?.appearance?.eyeColor}</p>
            <p>Gender: {data?.appearance?.gender}</p>
            <p>Race: {data?.appearance?.race}</p>
            <p>HairColor: {data?.appearance?.hairColor}</p>
            <p>Height: {data?.appearance?.height[0]}</p>
            <p>Weight: {data?.appearance?.weight[0]}</p>
          </div>
          <div className="info_right">
          <h2>Work Information</h2>
          <p>Base: {data?.work?.base}</p>
          <p>Occupation: {data?.work?.occupation}</p>
          </div>
          </div>
        </div>
        <div className="character-stats">
            <h2>Stats</h2>
            <ul>
                <li>Intelligence: <ProgressBar number={ data?.powerstats?.intelligence}/></li>
                <li>Strength: <ProgressBar number={ data?.powerstats?.strength}/></li>
                <li>Speed: <ProgressBar number={ data?.powerstats?.speed}/></li>
                <li>Durability: <ProgressBar number={ data?.powerstats?.durability}/></li>
                <li>Power: <ProgressBar number={ data?.powerstats?.power}/></li>
                <li>Combat: <ProgressBar number={data?.powerstats?.combat}/></li>
            </ul>
        </div>
        <div className="affiliation_card">
          <h2>Group Affiliations</h2>
          <p>{data?.connections?.groupAffiliation}</p>
          <h2>Relatives</h2>
          <p>{data?.connections?.relatives}</p>
        </div>
          </div>
    </div>
  );
};

export default CharScreen;