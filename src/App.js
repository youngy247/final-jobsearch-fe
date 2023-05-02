import './App.css';
import Footer from "./components/Footer";
import RecentJobs from "./components/RecentJobs";
import Header from "./components/Header";
import DetailModal from "./components/DetailModal";

const App = () => {

    return (
        <>
            <Header/>
            <RecentJobs/>
            <Footer />
            <DetailModal />
        </>
    )
}

export default App
