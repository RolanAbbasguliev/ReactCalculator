import React, { useEffect } from "react";
import Calculator from "../Calculator/Calculator";
import "./App.css";
import keyboard from "../../Store/keyboard";

function App() {
    useEffect(() => {
        document.addEventListener("keydown", detectKeyDown, true);
        return () =>
            document.removeEventListener("keydown", detectKeyDown, true);
    }, []);

    const detectKeyDown = (e: any) => {
        keyboard.keyHandler(e.key)
   

        // if (Number(e.key) || e.key === "+" || e.key === "-" || e.key === "/" ||  e.key === "0") {
        //     keyboard.expression += e.key;
        // }
        // if (e.key === "*") {
        //     keyboard.expression += "×";
        // }
        // if (e.key === "." || e.key === ",") {
        //     keyboard.expression += ",";
        // }
        // if (e.key === "Backspace"){
        //     keyboard.expression.slice(0, -1);
        // }
    };
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
                w-full
                max-h-[876px]
                max-w-[616px] 
                my-[34px] rounded-[18px] flex"
            >
                <Calculator />
            </div>
        </div>
    );
}

export default App;
