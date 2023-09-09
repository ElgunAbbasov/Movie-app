import Genres from "./routes/genres-page-component/genres-page-component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation-bar-component/navigation-bar-component";
import NewFilms from "./routes/newfilms-page-component/newfilms-component";
import './App.css'






const App=()=>{
    return(
    <Routes>
        <Route path="/" element={<Navigation/>}>
            <Route path='/genres' element={<Genres/>} />
            <Route path='/newfilms' element={<NewFilms/>}/>
        </Route>
        
    </Routes>
    )
}

export default App;