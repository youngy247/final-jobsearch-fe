
import './App.css';
import Footer from "./components/Footer";
import RecentJobs from "./components/RecentJobs";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";


const App = () => {
    return (
        <>
            <Header/>
            <SearchBar />
            {/*<RecentJobs/>*/}
            <Footer />
        </>
    )
}

export default App
