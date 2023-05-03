import './App.css';
import DetailModal from "./components/DetailModal";
import Footer from "./components/Footer";
import RecentJobs from "./components/RecentJobs";
import Header from "./components/Header";
import {useEffect, useState} from "react";

const App = () => {

    const [selectedID, setSelectedID] = useState(null)

    return (
        <>
            <Header/>
            <RecentJobs selectedID={selectedID} setSelectedID={setSelectedID}/>
            <DetailModal selectedID={selectedID}/>
            <Footer selectedID={selectedID} setSelectedID={setSelectedID}/>
        </>
    )
}

export default App
