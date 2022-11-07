import { makeAutoObservable } from "mobx";

interface Operation {
    name: string;
    priority: number;
}

class Keyboard {
    buttons: Array<string | null> = [
        "C",
        "√",
        "%",
        "/",
        "7",
        "8",
        "9",
        "×",
        "4",
        "5",
        "6",
        "-",
        "1",
        "2",
        "3",
        "+",
        "00",
        "0",
        ",",
        "=",
    ];
    expression = "";
    result = 0;
    constructor() {
        makeAutoObservable(this);
    }

    keyHandler(key: string | null): void {
        switch (key) {
            case "Backspace":
                this.expression = this.expression.slice(0, -1);
                break;
            case "Enter":
                this.result = this.Parser(this.expression);
                break;
            case "=":
                this.result = this.Parser(this.expression);
                break;
            case "%":
                this.expression += key;
                break;
            case "+":
                this.expression += key;
                break;
            case "-":
                this.expression += key;
                break;
            case "*":
                this.expression += "×";
                break;
            case "×":
                this.expression += key;
                break;
            case "/":
                this.expression += key;
                break;
            case "с":
                this.expression = "";
                this.result = 0;
                break;
            case "C":
                this.expression = "";
                this.result = 0;
                break;
            case "0":
                if (this.expression.length) this.expression += key;
                break;
            case "1":
                this.expression += key;
                break;
            case "2":
                this.expression += key;
                break;
            case "3":
                this.expression += key;
                break;
            case "4":
                this.expression += key;
                break;
            case "5":
                this.expression += key;
                break;
            case "6":
                this.expression += key;
                break;
            case "7":
                this.expression += key;
                break;
            case "8":
                this.expression += key;
                break;
            case "9":
                this.expression += key;
                break;
            default:
                break;
        }
        // let button = event.target.innerHTML;
        // if (button === "=") {
        //     // this.Parser(this.expression);
        //     this.result = this.Parser(this.expression);
        //     return 1;
        // }
        // if (button === "C" || button === "00") {
        //     this.expression = "";
        //     this.result = 0;
        //     return 1;
        // }
        // this.expression += button;
    }

    CreateTokens(str: string): Array<any> {
        let tokens: Array<number | Operation> = [];
        let num: string = "";
        for (let i = 0; i < str.length; i++) {
            if (Number(str[i]) || str[i] === "0") {
                num += str[i];
                if (i === str.length - 1) tokens.push(Number(num));
            } else {
                if (str[i] === ",") {
                    num += ".";
                    continue;
                }
                if (num !== "") tokens.push(Number(num));
                let priority: number = 0;
                switch (str[i]) {
                    case "+":
                        priority = 1;
                        break;
                    case "-":
                        priority = 1;
                        break;
                    case "/":
                        priority = 2;
                        break;
                    case "×":
                        priority = 2;
                        break;
                    case "%":
                        priority = 2;
                        break;
                    case "√":
                        priority = 2;
                        break;
                    default:
                        break;
                }

                let obj: Operation = {
                    name: str[i],
                    priority: priority,
                };
                tokens.push(obj);
                num = "";
            }
        }
        if (tokens.length < 2) throw new Error("Invalid operation");

        return tokens;
    }

    CreatPostfix(str: string): Array<number | Operation | undefined> {
        const tokens: Array<any> = this.CreateTokens(str);
        let result: Array<number | Operation | undefined> = [];
        let stack: Array<Operation> = [];

        for (let i = 0; i < tokens.length; i++) {
            if (typeof tokens[i] === "number") {
                if (i === tokens.length - 1) {
                    result.push(tokens[i]);
                    while (stack.length) {
                        result.push(stack.pop() || 0);
                    }
                    continue;
                }
                result.push(tokens[i]);
            } else if (typeof tokens[i] === "object") {
                if (stack.length === 0) {
                    stack.push(tokens[i]);
                    continue;
                }
                if (tokens[i].priority > stack[stack.length - 1].priority) {
                    stack.push(tokens[i]);
                } else {
                    while (stack.length) {
                        result.push(stack.pop());
                    }
                    stack.push(tokens[i]);
                }
            }
        }
        return result;
    }

    Parser(str: string): number {
        const postfixStr: Array<any> = this.CreatPostfix(str);
        console.log(postfixStr);
        const stack: Array<any> = [];

        for (let i = 0; i < postfixStr.length; i++) {
            if (typeof postfixStr[i] === "number") {
                stack.push(postfixStr[i]);
            } else if (typeof postfixStr[i] === "object") {
                let sNum: number = stack[stack.length - 1];
                let fNum: number = stack[stack.length - 2];
                stack.pop();
                stack.pop();
                let res = this.MakeMath(fNum, sNum, postfixStr[i].name);
                stack.push(res);
            }
        }
        let result = stack.pop();
        if (this.NumOfDecimals(result) > 7) {
            return result.toFixed(7);
        }
        return result;
    }

    NumOfDecimals(x: any): number {
        return x.toString().includes(".")
            ? x.toString().split(".").pop().length
            : 0;
    }

    MakeMath(fNum: number, sNum: number, operation: any): number | undefined {
        if (fNum === undefined || sNum === undefined) return undefined;
        switch (operation) {
            case "+":
                return fNum + sNum;
            case "-":
                return fNum - sNum;
            case "/":
                return fNum / sNum;
            case "×":
                return fNum * sNum;
            case "%":
                return fNum % sNum;
            default:
                break;
        }
    }

    // Parser(str: string): number {
    //     const tokens: any[] = this.CreateTokens(str);
    //     console.log(tokens);

    //     let stackNum: number[] = [];
    //     const stackOper: Operation[] = [];
    //     //
    //     //STACK NUM:  6 6
    //     //STACK OPER:  +
    //     //
    //     // 6 + 6
    //     for (let i = 0; i < tokens.length; i++) {
    //         if (!isNaN(tokens[i])) {
    //             stackNum.push(tokens[i]);
    //         }
    //         if (typeof tokens[i] === "object") {
    //             if (stackOper.length === 0) {
    //                 stackOper.push(tokens[i]);
    //                 continue;
    //             }
    //             if (tokens[i].priority > stackOper[stackOper.length - 1].priority) {
    //                 stackOper.push(tokens[i]);
    //             } else {
    //                 let operation = stackOper[stackOper.length - 1].name;
    //                 let sOperand = stackNum.pop();
    //                 let fOperand = stackNum.pop();
    //                 let result = this.MakeMath(fOperand, sOperand, operation);
    //                 console.log(result)
    //                 stackOper.pop()
    //                 stackOper.push(tokens[i]);
    //                 if (result !== undefined) {
    //                     stackNum.push(result);
    //                 }
    //             }
    //         }
    //     }
    //     console.log(stackNum);
    //     console.log(stackOper);
    //     // let result = stackNum.pop();
    //     // console.log(result);
    //     return 0;
    // }
}

export default new Keyboard();
