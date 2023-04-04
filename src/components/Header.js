import React, {useContext, useState} from 'react';
import logo from "../img/company.jpg"
import {Link, useNavigate} from "react-router-dom";
import {FiSearch} from "react-icons/fi";
import {IoIosClose} from "react-icons/io";
import {LanguageContext} from "../context";
import {MdNightlightRound} from "react-icons/md";
import {BsSun} from "react-icons/bs";

const Header = () => {
    const [input, setInput] = useState(false)
    const [leave,setSearch] = useState(false)
    const [ser,setSer] = useState("")
    const nav = useNavigate()
    const {setLanguage} = useContext(LanguageContext)
    const {setDark} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)

    return (
        <div>
            <div id="header" style={{
                background:dark  === true ? "white" : "black"
            }}>
                <div className="container">
                    <div className="header">
                        <div className="header-logo">
                            <img className={"logo"} width="200px" height="40px" src={logo}/>
                            <Link style={{
                                color:dark === true ? "black" :"white"
                            }} className={"first-link"} to={"/Фильмы"}>Фильмы</Link>
                            <Link style={{
                                color:dark === true ? "black" :"white"
                            }} className={"first-link"} to={"/TopRated"}>TopRated</Link>
                            <Link style={{
                                color:dark === true ? "black" :"white"
                            }} className={"first-link"} to={"/user"}>Users</Link>
                            <Link style={{
                                color:dark === true ? "black" :"white"
                            }} className={"first-link"} to={"/Еще"}>Еще</Link>
                            <Link style={{
                                color:dark === true ? "black" :"white"
                            }} className={"first-link"} to={"/popular"}>Popular</Link>
                        </div>
                        <select onChange={(e) => setLanguage(e.target.value)}>
                            <option value="en-US">English</option>
                            <option value="ru-RU">Russia</option>
                            <option value="fr-FR">France</option>
                        </select>
                        <div>
                            <button onClick={()=>setDark(true)} style={{padding:"7px 10px", fontSize:"20px",margin:"0 10px",cursor:"pointer"}}><BsSun/></button>
                            <button onClick={()=>setDark(false)} style={{padding:"7px 10px", fontSize:"20px",margin:"0 10px",cursor:"pointer"}}><MdNightlightRound/></button>
                        </div>
                        <div className="header-nav">
                            <Link style={{

                                color:dark === true ? "black" :"white"
}} className={"second-link"} to={"/"}>Войти</Link>
                            <Link style={{                                color:dark === true ? "black" :"white"
}} className={"second-link"} to={"/"}>Регистрация</Link>
                            <button  onClick={() => {
                                setInput(true)
                            }}>
                                <FiSearch style={{cursor:"pointer", }} className={"search"} /></button>
                                <IoIosClose onClick={() => {setInput(false)}}  style={{fontSize:"35px",cursor:"pointer"}}/>
                        </div>

                    </div>
                </div>

            </div>
            <div className="modal" style={{
                display : input  === true  ? "block" : "none" && leave ===  true ? "block" : "none",
                margin:"80px"
            }}>
                <input  onChange={(e)=>{
                    setSer(e.target.value)
                }} style={{width : "400px"}} type="search"/>

                <button style={{cursor:"pointer"}} onClick={()=>nav(`/search_movie/${ser}`)}>Search</button>
            </div>
        </div>
    );
};

export default Header;