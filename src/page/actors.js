import React, {useState, useEffect, useContext} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../Api/Api";
import user from "../img/user.png"
import {LanguageContext} from "../context";
const Actors = ({id}) => {
    const [actor,setActor] = useState({})
    const {cast} = actor
    const {dark} = useContext(LanguageContext)
    function getParam(key){
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
            .then((res)=>{
                console.log(res.data)
                setActor(res.data)
            })
    }
    useEffect(()=>{
        getParam(API_KEY)
    },[])
    return (
        <div id="actors">
            <div className="container">
                <div className="actors">
                    <div className="block">
                        {

                            cast?.map((el)=>{
                                  return (
                                        <div className="card-actor">
                                {
                                    <Link to={`/information/${el.id}`}>
                                        {el.profile_path ? <img style={{borderRadius: "5px"}} src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`} alt=""/>
                                        : <img src={user} style={{width: "200px", height: "200px"}} alt=""/>}
                                    </Link>

                                }

                                <p style={{textAlign:"center",padding:"5px 0",                        color:dark === true ? "black" :"white",
}}>{el.name}</p>
                                <h5 style={{textAlign:"center",padding:"5px 0",                        color:dark === true ? "black" :"white",
}}>{el.character}</h5>
                            </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Actors;