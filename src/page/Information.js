import React, {useState, useEffect, useContext} from 'react';
import {API_KEY} from "../Api/Api";
import axios from "axios";
import {useParams} from "react-router-dom";
import style from "../App.css"
import ActerMovie from "./ActerMovie";
import {LanguageContext} from "../context";
const Information = () => {
    
    const [info,setInfo] = useState({})
    const [bio,setBio] = useState(300)
    const params = useParams()
    const {dark} = useContext(LanguageContext)
    const {language} = useContext(LanguageContext)
    console.log(params)
    function getOpen (text){
        if (bio === 300){
         return    setBio(text.length)
        }
        else{
          return   setBio(300)
        }
    }
    function getInfo(key){
        axios(`https://api.themoviedb.org/3/person/${params.personId}?api_key=${key}&language=${language}`)
            .then((res)=>{
                setInfo(res.data)
            })
    }
    useEffect(()=>{
        getInfo(API_KEY)
    },[language])
    console.log(info)
    return (
        <div id="info" style={{
            background:dark  === true ? "white" : "black",

        }}>
            <div className="container">
                <div className="info">
                    <div className="info-tittle">
                        <img style={{borderRadius:"10px"}} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${info.profile_path}`} alt=""/>
                            <p style={{color:dark === true ? "black" :"white", padding:"20px 0 0   0"}}>
                            <span style={{            color:dark === true ? "black" :"white",
                            }}>
                            Персональная информация
                             </span>
                                <br/>
                                <br/>
                                Известность за  <br/>
                                <span style={{color:dark === true ? "blue" :"wheat",}}>
                                {info.known_for_department}
                            </span>
                            </p>
                            <p style={{ color:dark === true ? "black" :"white", padding:"10px 0"}}> Также известность как  <br/>
                                <span style={{color:dark === true ? "blue" :"wheat",}}>
                                {info.also_known_as}
                            </span>

                            </p>
                            <p style={{color:dark === true ? "black" :"white",
                                padding:"10px 0"}}>Дата рождения <br/>
                                <span style={{color:dark === true ? "blue" :"wheat",}}>
                                {info.birthday}  ({2023 - info.birthday?.slice(0,4)}лет)
                            </span>
                            </p>
                            <p style={{ color:dark === true ? "black" :"white",
                            }}>Место рождения  <br/>
                                <span style={{color:dark === true ? "blue" :"wheat",}}>
                                {info.place_of_birth}
                            </span>

                            </p>

                    </div>
                    <div className="info-nav">
                        <h1 style={{color:dark === true ? "black" :"white",padding:"0 0 20px 0"}}>{info.name}</h1>
                        <p style={{color:dark === true ? "black" :"white",}}>Biography <br/> <br/>
                            <span  style={{color:dark === true ? "blue" :"wheat",fontFamily:"sans-serif"}}>
                                {info.biography?.slice(0,bio)}
                            </span>
                        </p>
                        <span onClick={()=>{
                            getOpen(info.biography)
                        }} style={{color:"blue",cursor:"pointer",fontWeight:"800"}}>{bio === 300 ? "Читать еще>" : "Закрыть"}</span>
                        <ActerMovie personID = {params.personId}/>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Information;