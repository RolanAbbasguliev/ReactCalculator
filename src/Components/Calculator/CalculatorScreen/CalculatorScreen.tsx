import React from "react";

export interface StandardComponentProps {
    expression?: string;
    result?: number;
}

const CalculatorScreen = ({ expression, result }: StandardComponentProps) => {
    return (
        <div className="calculator_screen flex flex-col">
            <div
                className="calculator_expression
                flex justify-end flex-nowrap
                items-end
                max-w-[460px] h-[117px] 
                text-[24px]"
            >
                {expression}
            </div>
            <div
                className="calculator_result
                flex justify-end flex-nowrap
                mt-[28px]
                font-['Geometria-Medium']
                text-[56px]
                border-b-[2px]
                border-b-[#7695C2]"
            >
                {result}
            </div>
        </div>
    );
};

export default CalculatorScreen;
