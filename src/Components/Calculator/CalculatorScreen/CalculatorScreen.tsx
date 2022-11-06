import React from "react";
import keyboard from "../../../Store/keyboard";
import "./CalculatorScreen.css";
import { observer } from "mobx-react-lite";

export interface StandardComponentProps {
    result?: number;
}

const CalculatorScreen = observer(() => {
    return (
        <div className="calculator_screen flex flex-col w-full h-full max-h-[221px] max-w-[460px] snap-x">
            <div
                className="calculator_expression
                flex justify-end flex-nowrap
                items-end
                h-full
                overflow-x-scroll
                max-h-[117px]
                text-[24px]"
            >
                {keyboard.expression}
            </div>

            <div
                className="calculator_result flex-nowrap
                flex justify-end 
                mt-[28px]
                max-h-[76px]
                font-['Geometria-Medium']
                text-[56px]"
            >
                {keyboard.result}
            </div>
        </div>
    );
});

export default CalculatorScreen;
