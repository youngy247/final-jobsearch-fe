
import './App.css';
import Footer from "./components/Footer";
import RecentJobs from "./components/RecentJobs";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar"
import {useState} from "react";

const App = () => {

    const [URL, setURL] = useState('/recent')

    return (
        <>
            <Header />
            <SearchBar setURL={setURL} URL={URL}/>
            <Footer />
        </>
    )
}

export default App
