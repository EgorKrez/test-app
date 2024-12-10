import React from "react";
import "./App.css";
import FriendsList from "./components/FriendsList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FriendsDetails from "./components/FriendsDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<FriendsList />}></Route>
            <Route path="/details" element={<FriendsDetails />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
