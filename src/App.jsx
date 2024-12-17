import React from "react";
import { Header } from "./components/header/header.jsx"
import { Body } from "./components/body/body.jsx"
import { ProjectList } from "./components/ProjectList/ProjectList.jsx"

function App() {
    return (
        <div>
            <Header />
            <Body />
            <ProjectList />
        </div>
    );
}

export default App;
