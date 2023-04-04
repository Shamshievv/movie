import React, {useState, useEffect, useContext} from 'react';
import {Link, useParams} from "react-router-dom";
import {API_KEY} from "../Api/Api";
import axios from "axios";
import fe from "../App.css"
import Header from "../components/Header";
import {LanguageContext} from "../context";
const Search = ({el}) => {
    const {name} = useParams()
    const [search,setSearch] = useState([])
    const {dark} = useContext(LanguageContext)
    function getSearch(key){
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${name}`)
            .then((res)=>{
                setSearch(res.data.results)
            })
    }

    console.log(search.results)
    useEffect(()=>{
        getSearch(API_KEY)
    },[search])
    return (
        <div id="general" style={{ background:dark  === true ? "white" : "black"}}>
            <div className="container">
                <div className="general">

                    {
                        search.map((el) => {
                            return <div className="card">
                                <Link to={`/details/${el.id}`}>
                                    <img style={{padding:"10px 35px"}} src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                                </Link>
                                <h3 style={{fontSize:"16px",textAlign:"center",color:dark === true ? "black" :"white",}}>{el.original_title}</h3>
                            </div>
                        })
                    }
                    <img className={el} src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2/`} alt=""/>

                </div>

            </div>
        </div>

    );
};

export default Search;