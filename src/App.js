import { Route, Routes } from "react-router";
import './App.css';
import { BookShelf } from "./pages/BookShelf";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookShelf />} />
      </Routes>
    </div>
  );
}

export default App;
