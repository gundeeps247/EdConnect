import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Route path="/" component={HomePage} exact />
        <Route path="/chats" component={ChatPage} />
      </div>
    </div>
  );
}

export default App;
