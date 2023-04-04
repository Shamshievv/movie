import React, {useState, useEffect, useContext} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../Api/Api";
import aoa from "../App.css"
import TopRated from "./TopRated";
import Actors from "./actors";
import Trailer from "./Trailer";
import {LanguageContext} from "../context";
 const Details = () => {

    const [details,setdetails] = useState({})
    const {id} = useParams()
     const {dark} = useContext(LanguageContext)
    function getDetails (key){
       axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=EN-EN`)
           .then((res)=> {
               // console.log(res.data)
               setdetails(res.data)
           })
    }

     useEffect(() =>{
        getDetails(API_KEY)
    },[])
    // console.log(params)
     const {genres} = details
    return (
        <div>
            <div id="details" style={{
                    backgroundImage:`url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${details.backdrop_path})`,
                    boxShadow:"inset 900px 0 0 400px rgba(0,0,0,0.7)",

            }}>
                <div className="container">
                    <div className="details" >
                        <div className="tittle" style={{padding:"40px 0"}}>
                            <img style={{height:"400px",width:"300px",borderRadius:"10px"}} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${details.poster_path}`} alt=""/>
                        </div>
                        <div className="nav" style={{padding:"60px 40px"}}>
                            <h1 style={{fontFamily:"sans-serif",color:"white",padding:"20px 20px"}}>{details.original_title}</h1>
                            <span style={{fontSize:"30px",color:"white",fontFamily:"sans-serif",margin:"10px 20px"}}>Date : {details.release_date}</span>
                            {
                                genres?.map((el)=>{
                                    return (
                                        <div style={{display:"flex",flexDirection:"column"}}>
                                            <p style={{color:"white"}}>{el.name}</p>

                                        </div>
                                    )
                                })
                            }
                            <p style={{color:"darkgray",fontSize:"29px",paddingBottom:"20px",padding:"20px"}}>{details.tagline}</p>
                            <span style={{padding:"0 20px",color:"white",fontSize:"20px"}}>Обзор</span>
                            <p style={{padding:"10px 20px",color:"white",fontFamily:"sans-serif"}}>{details.overview}</p>
                            <br/>
                            <h4 style={{padding : "0 20px",color:"white",fontFamily:"sans-serif"}}>Original language:{details.original_language}</h4>
                            <br/>
                            <li style={{color:"white",padding:"0 20px"}}>{Math.floor(details.runtime / 60)}h {details.runtime % 60}m</li>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{                background:dark  === true ? "white" : "black"
            }}>
            <h1 style={{                        color:dark === true ? "black" :"white",
                margin:"0 90px"}}>Главных ролях</h1>
            <Actors  id={id}/>
            <Trailer id={id}/>
            </div>
        </div>
    );
};

export default Details;

