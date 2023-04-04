import React, {useState, useEffect, useContext} from 'react';
import style from "../App.css"
import {LanguageContext} from "../context";
const Users = () => {
    const [data,setData] = useState([])
    const {dark} = useContext(LanguageContext)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((data) => data.json())
            .then((res) => setData(res))

    },[])
    return (
        <div style={{ background:dark  === true ? "white" : "black"}}>
            <div className="container">
                {
                    data.map((el)=> {
                        return (
                            <div>
                                <h1 style={{ color:dark === true ? "black" :"white",}}>{el.name}</h1>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Users;