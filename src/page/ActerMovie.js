import React, {useState, useEffect, useContext} from 'react';
import {API_KEY} from "../Api/Api";
import axios from "axios";
import {Link} from "react-router-dom";
import {LanguageContext} from "../context";

const ActerMovie = ({personID}) => {
    const [movie,setMovie] = useState([])
    const {dark} = useContext(LanguageContext)
    function getMovie(key) {
        axios(`https://api.themoviedb.org/3/person/${personID}/movie_credits?api_key=${key}&language=en-US`)
            .then((res)=>{
                setMovie(res.data.cast)
            })
    }


    useEffect(()=>{
        getMovie(API_KEY)
    },[])
    console.log(movie)
    return (
        <div id="actorMovie">
            <h3  style={{color:dark === true ? "black" :"white",paddingBottom:"10px"}}>Известность за</h3>

            <div className="actorMovie">
                    {
                        movie.map((el)=>(
                            <Link to={`/details/${el.id}`}>
                                <div className="actor--card">
                                    {
                                        el.poster_path ? <img style={{width: "150px"}} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt=""/>
                                       : <img src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2/boO9zF6wZdaetv7GpE6p9iebOIv.jpg`} alt=""/>
                                    }
                                    <p style={{color:dark === true ? "black" :"white",}}>{el.title}</p>
                                </div>
                            </Link>
                        ))
                    }
            </div>

        </div>
    );
};

export default ActerMovie;