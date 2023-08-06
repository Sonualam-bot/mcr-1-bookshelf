import { Route, Routes } from "react-router";
import './App.css';
import { BookShelf } from "./pages/BookShelf";
import { Search } from "./pages/Search";
import { Header } from "./pages/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<BookShelf />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
