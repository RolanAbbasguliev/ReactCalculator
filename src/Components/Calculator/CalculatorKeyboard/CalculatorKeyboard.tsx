import React, { useState } from "react";
import "./CalculatorKeyboard.css";
import keyboard from "../../../Store/keyboard";

const CalculatorKeyboard = () => {
    return (
        <div
            className="calculator_keyboard
            w-full  h-full 
            grid 
            grid-cols-4
            gap-x-[20px]
            gap-y-[16px]
            mt-[37px]
            "
        >
            {keyboard.buttons.map((button) => {
                return button === "=" ? (
                    <button
                        key={button}
                        className="keyboard_item text-[36px] text-[#2B589A] bg-[#FFFFFF] active:bg-[#4B79BE] rounded-full cursor-pointer"
                    >
                        {button}
                    </button>
                ) : (
                    <button
                        key={button}
                        onClick={(e) => keyboard.keyHandler(e.currentTarget.textContent)}
                        className="keyboard_item text-[36px] active:bg-[#4B79BE] rounded-full cursor-pointer"
                    >
                        {button}
                    </button>
                );
            })}
        </div>
    );
};

export default CalculatorKeyboard;
