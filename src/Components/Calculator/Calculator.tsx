import React, { KeyboardEvent } from "react";
import "./Calculator.css";
import CalculatorKeyboard from "./CalculatorKeyboard/CalculatorKeyboard";
import CalculatorScreen from "./CalculatorScreen/CalculatorScreen";
import keyboard from "../../Store/keyboard";

const Calculator = () => {

    return (
        <div
            className="calculator 
            text-[#F2F2F2]
            flex flex-col 
            w-full
            max-w-[554px]
            mx-[38px] my-[31px]
            pt-[16px] pb-[44px] px-[48px]
            bg-gradient-to-b from-[#28518E] to-[#3A77D1]
            rounded-[18px]"
        >
            <CalculatorScreen />
            <hr className="border-[2px] border-[#7899CA] w-full mt-[18px]" />
            <CalculatorKeyboard />
        </div>
    );
};

export default Calculator;
