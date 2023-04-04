import "../src/App.css"
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Users from "./components/Users";
import Popular from "./page/Popular";
import TopRated from "./page/TopRated";
import Details from "./page/Details";
import Information from "./page/Information";
import Search from "./page/Search";


function App() {
  return (
    <div className="App">
   <Header/>
        <Routes>
            <Route path="/user" element={<Users/>}/>
            <Route path="/popular" element={<Popular/>}/>
            <Route path="/topRated" element={<TopRated/>}/>
            <Route path={`/details/:id`} element={<Details/>}/>
            <Route path={`/information/:personId`} element={<Information/>}/>
            <Route path={`/search_movie/:name`} element={<Search/>}/>
        </Routes>
    </div>
  );
}

export default App;
