import './App.css';
import DetailModal from "./components/DetailModal";
import Footer from "./components/Footer";
import RecentJobs from "./components/RecentJobs";
import Header from "./components/Header";
import {useEffect, useState} from "react";

const App = () => {

    const [selectedID, setSelectedID] = useState(8)
    const changeSelectedID = () => {
        setSelectedID(9)
        console.log("function" + selectedID)
    }

    return (
        <>
            <Header/>
            <RecentJobs selectedID={selectedID} changeSelectedID={changeSelectedID}/>
            <DetailModal />
            <Footer selectedID={selectedID} changeSelectedID={changeSelectedID}/>
        </>
    )
}

export default App
