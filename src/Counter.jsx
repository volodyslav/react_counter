import React, {useState} from "react";

function Counter(){
    const [number, setNumber] = useState(0)

    const handleDecrease = () =>{
        setNumber(number - 1)
    }

    const handleReset = () =>{
        setNumber(0)
    }

    const handleIncrease = () =>{
        setNumber(number + 1)
    }

    return(
        <div className="text-center mt-10 space-y-4">
            <h1 className="text-4xl">{number}</h1>
            <div className="space-x-4"> 
                <button onClick={handleDecrease} className="bg-red-500 text-white p-2 hover:bg-red-800 rounded-lg">Decrease</button>
                <button onClick={handleReset} className="bg-green-500 text-white p-2 hover:bg-green-800 rounded-lg">Reset</button>
                <button onClick={handleIncrease} className="bg-blue-500 text-white p-2 hover:bg-blue-800 rounded-lg">Increase</button>
            </div>
        </div>
    )
}

export default Counter;
