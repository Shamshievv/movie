import React, {useState} from 'react';
import {LanguageContext} from "./index";

const RootContext = ({children}) => {
    const [language,setLanguage] = useState("en-US")
    const [dark,setDark] = useState(false)
    const [det,setDet] = useState("EN-EN")
    return (
        <div>
         <LanguageContext.Provider value={{
             language,
             setLanguage,
             dark,
             setDark,
             det,
             setDet
         }}>
             {children}
         </LanguageContext.Provider>

        </div>
    );
};

export default RootContext;