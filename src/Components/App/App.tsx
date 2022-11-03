import React from "react";
import Calculator from "../Calculator/Calculator";
import "./App.css";

function App() {
    return (
        <div
            className="App 
            w-screen h-screen 
            bg-gradient-to-r from-[#FFA1A1] to-[#FF7B7B] 
            flex justify-center
            text-[#F2F2F2]"
        >
            <div
                className="app_container
                bg-[#F7A8A8] 
                w-full  max-w-[616px] max-h-[876px] 
                my-[34px] rounded-[18px] flex"
            >
                <Calculator />
            </div>
        </div>
    );
}

export default App;
