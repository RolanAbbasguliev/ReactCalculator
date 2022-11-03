import React from "react";
import "./Calculator.css";
import CalculatorScreen from "./CalculatorScreen/CalculatorScreen";

const Calculator = () => {
    return (
        <div
            className="calculator 
            text-[#F2F2F2]
            flex flex-col w-full
            mx-[38px] my-[31px]
            pt-[16px] pb-[44px] px-[48px]
            bg-gradient-to-b from-[#28518E] to-[#3A77D1]
            rounded-[18px]"
        >
            <CalculatorScreen result={800} expression={"20×80×0,5"} />
        </div>
    );
};

export default Calculator;
