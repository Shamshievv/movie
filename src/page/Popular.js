import React, {useState, useEffect, useContext} from 'react';
import {API_KEY} from "../Api/Api";
import axios from "axios";
import "../App.css"
import {LanguageContext} from "../context";

const Popular = () => {
    const [popular,setPopular] = useState([])
    const [active,setActive] = useState(1)
    const {language} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    if (active === 0 ){
        setActive(active + 1)
    }
    function getPopular() {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${language}&page=${active} `)
            .then((res) => {
                setPopular(res.data.results)
                console.log(res.data.results)
            })

    }
    useEffect(() => {
        getPopular(API_KEY)
    },[language,active])
    return (
        <div id="popular" style={{
            background:dark  === true ? "white" : "black"
        }}>
            <div className="container">
                <h1 style={{color:"white"}}>Popular movies</h1>
                <div className="cards">
                    {
                        popular.map((el) => {
                            return (
                                <div className="popular">
                                    <img style={{margin : "10px 35px"}} src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                                    <h1 style={{
                                        fontSize : "16px",
                                        textAlign : "center",
                                        color:dark === true ? "black" :"white",
                                        fontWeight : "900",
                                        fontFamily:"sans-serif"
                                    }}>{el.title}</h1>
                                    <h1 style={{
                                        color: "darkgray",
                                        fontSize : "15px",
                                        textAlign : "center"
                                    }}>Date :{el.release_date}</h1>
                                </div>
                            )
                        })
                    }
                </div>
                <div style={{display:"flex"}}>
                    <button onClick={()=>setActive(active - 1)}>prew</button>
                    <p style={{color:"white",fontSize:"25px"}}>page: {active}</p>
                    <button onClick={()=>setActive(active + 1)}>Next</button>
                    <button onClick={()=>setActive(0)}>reset</button>
                </div>
            </div>

        </div>
    );
};

export default Popular;