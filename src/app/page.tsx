'use client'

import { useState } from "react";

export default function Home() {

  const [counter, setCounter] = useState(0)

  const addCounter = () => {
    setCounter(prev => prev + 1)
  }

  const subtractCounter = () => {
    if(counter > 0){
      setCounter(prev => prev - 1)
    }
  }

  return (
    <div className="w-full h-[100vh] flex flex-col gap-5 justify-center items-center">

      <h1 className="text-5xl text-gray-500">{counter}</h1>

      <div className="flex gap-2">
        <button className="p-2 bg-blue-700 text-white rounded-sm cursor-pointer" onClick={addCounter}> 
          Sumar
        </button>
        <button className="p-2 bg-gray-500 rounded-sm text-white cursor-pointer" onClick={subtractCounter}>
          Restar
        </button>
      </div>

    </div>
  );

}
