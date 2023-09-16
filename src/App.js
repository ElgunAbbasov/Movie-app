import Genres from "./routes/genres-page-component/genres-page-component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation-bar-component/navigation-bar-component";
import NewFilms from "./routes/newfilms-page-component/newfilms-component";
import NewEpisodes from "./routes/newepisodes-page-component/newepisodes-component";
import HistoryPage from "./routes/genres-underpages-component/history-pages-component/history-pages-component";
import ActionPage from "./routes/genres-underpages-component/action-pages-component/action-page-component";
import AnimationPage from "./routes/genres-underpages-component/animation-page-component/animation-page-component";
import FantasyPage from "./routes/genres-underpages-component/fantasy-page-component/fantasy-page-component";
import DramaPage from "./routes/genres-underpages-component/drama-page-component/drama-page-component";
import HorrorPage from "./routes/genres-underpages-component/horror-page-component/horror-page-component";
import AnimePage from "./routes/genres-underpages-component/Anime-page-component/anime-page-component";
import AdventurePage from "./routes/genres-underpages-component/adventure-page-component/adventure-page-component";
import ComedyPage from "./routes/genres-underpages-component/comedy-page-component/comedy-page-component";
import RomancePage from "./routes/genres-underpages-component/romance-page-component/romance-page-component";
import CrimePage from "./routes/genres-underpages-component/crime-page-component/crime-page-component";
import ScienceFictionPage from "./routes/genres-underpages-component/science-fiction-page-component/science-fiction-page-component";
import MilitaryPage from "./routes/genres-underpages-component/military-page-component/military-page-component";
import DetectivePage from "./routes/genres-underpages-component/detective-page-component/detective-page-component";
import ThrillerPage from "./routes/genres-underpages-component/thirller-page-component/thriller-page-component";
import SpyPage from "./routes/genres-underpages-component/spy-page-component/spy-page-component";
import './App.css'









const App=()=>{
    return(
    <Routes>
        <Route path="/" element={<Navigation/>}>
            <Route path='/genres' element={<Genres/>} />
            <Route path='/newfilms' element={<NewFilms/>}/>
            <Route path='/newepisodes' element={<NewEpisodes/>}/>
            <Route path="/History" element={<HistoryPage/>}/>
            <Route path="/Action" element={<ActionPage/>}/>
            <Route path="/Animation" element={<AnimationPage/>}/>
            <Route path="/Fantasy" element={<FantasyPage/>}/>
            <Route path="/Drama" element={<DramaPage/>}/>
            <Route path="/Horror" element={<HorrorPage/>}/>
            <Route path="/Anime" element={<AnimePage/>}/>
            <Route path="/Adventure" element={<AdventurePage/>}/>
            <Route path="/Comedy" element={<ComedyPage/>}/>
            <Route path="/Romance" element={<RomancePage/>}/>
            <Route path="/Crime" element={<CrimePage/>}/>
            <Route path="/Science-Fiction" element={<ScienceFictionPage/>}/>
            <Route path="/Military" element={<MilitaryPage/>}/>
            <Route path="/Detective" element={<DetectivePage/>}/>
            <Route path="/Thriller" element={<ThrillerPage/>}/>
            <Route path="/Spy" element={<SpyPage/>}/>
        </Route>
        
    </Routes>
    )
}

export default App;