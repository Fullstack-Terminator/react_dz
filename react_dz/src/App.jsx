import "./App.css";
import Header from "./components/Header/Header";
import ButtonSearch from "./components/ButtonSearch/ButtonSearch";
import Heading from "./components/Heading/Heading";
import Subtitle from "./components/Subtitle/Subtitle";
import SearchData from "./components/SearchData/SearchData";

function App() {
  return (
    <>
      <Header />
      <div className="search">
        <Heading />
        <Subtitle />
        <SearchData />
      </div>
    </>
  );
}

export default App;
