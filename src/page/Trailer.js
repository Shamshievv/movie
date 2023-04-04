import React, {useState, useEffect, useContext} from 'react';
import {API_KEY} from "../Api/Api";
import axios from "axios";
import {LanguageContext} from "../context";

const Trailer = ({id}) => {
    const [video,setVideo] = useState([])
    const {dark} = useContext(LanguageContext)
    function getVideo(key){
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
            .then((res)=>{
                setVideo(res.data.results)
            })
    }
    useEffect(()=>{
        getVideo(API_KEY)
    },[])
    console.log(video)
    return (
        <div id="video">
            <div className="container">
                <h1 style={{                        color:dark === true ? "black" :"white",
                    padding:"20px 0 "}}>Трейлеры:</h1>
                <div className="video" style={{
                    display:"flex",
                    alignItems:"flex-start",
                    overflowX:"auto"
                }}>
                    {
                        video.map((el)=>{
                            return (
                                <div style={{margin:"0 20px 0 0"}}>
                                    <iframe    width="342"  height="230" src={`https://www.youtube.com/embed/${el.key}`}
                                               title="FrontEnd 23-03 lesson 5" frameBorder="0"
                                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                               allowFullScreen>
                                    </iframe>
                                </div>
                            )
                        })
                    }
                </div>


            </div>

        </div>
    );
};

export default Trailer;