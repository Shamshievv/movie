import React, {useState} from 'react';
import {LanguageContext} from "./index";

const RootContext = ({children,child}) => {
    const [language,setLanguage] = useState("en-US")
    const [dark,setDark] = useState(false)
    return (
        <div>
         <LanguageContext.Provider value={{
             language,
             setLanguage,
             dark,
             setDark
         }}>
             {children}
         </LanguageContext.Provider>

        </div>
    );
};

export default RootContext;