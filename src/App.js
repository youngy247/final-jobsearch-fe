import './App.css';
import DetailModal from "./components/DetailModal";
import Footer from "./components/Footer";
import RecentJobs from "./components/RecentJobs";
import Header from "./components/Header";
import {useState} from "react";

const App = () => {

    const [selectedID, setSelectedID] = useState(0)
    const changeSelectedID = () => {
        setSelectedID(9)
        console.log(selectedID)
    }

    return (
        <>
            <Header/>
            <RecentJobs selectedID={selectedID} changeSelectedID={changeSelectedID}/>
            <DetailModal />
            <Footer />
        </>
    )
}

export default App
