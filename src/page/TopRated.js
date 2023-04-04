import React, {useState, useEffect, useContext} from 'react';
import {API_KEY} from "../Api/Api";
import axios from "axios";
import style from "../App.css"
import {Link} from "react-router-dom";
import {LanguageContext} from "../context";

const TopRated = (el) => {
    const [topRated,setTopRated] = useState([])
    const [paginate,setPaginate] = useState(1)
    const {language} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    function getTopRated(key){
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=${paginate}`)
            .then((res) => {
                console.log(res.data.results)
                setTopRated(res.data.results)
            })

    }

    useEffect(()=>{
        getTopRated(API_KEY)
    },[paginate,language])
    if (paginate === 0){
        setPaginate(paginate + 1 )
    }
    return (
        <div id="topRated" style={{
            background:dark  === true ? "white" : "black"
        }}>
            <div className="container">
                <div className="topRated">
                        {
                            topRated.map((el) => {
                                return <div className="card">
                                    <Link to={`/details/${el.id}`}>
                                        <img style={{padding:"10px 35px"}} src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>

                                    </Link>
                                    <h3 style={{fontSize:"16px",textAlign:"center",                                        color:dark === true ? "black" :"white",}}>{el.title}</h3>
                                </div>
                            })
                        }
                    <img className={el} src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2/`} alt=""/>

                </div>
                <div >
                    <button onClick={()=> setPaginate(paginate + 1)}>Next</button>
                    <p style={{fontSize:"20px",
                        color:dark === true ? "black" :"white",
                    }}>page:{paginate}</p>
                    {
                        <button onClick={()=>setPaginate(paginate -  1 )}>Minus</button>
                    }
                    <button  style={{margin:"0 20px"}} onClick={()=>setPaginate(0)}>reset</button>
                </div>
            </div>
        </div>
    );
};

export default TopRated;
