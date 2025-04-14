import { useState } from 'react'

import './App.css'




function App() {

  const [color, setColor] = useState("black")

  return (
    <>

      <h1 className="text-3xl text-center">
        Background Changer
      </h1>
      <div className='w-full h-screen flex justify-center' style={{ backgroundColor: color }}>
        <div className='fixed bg-white rounded-full w-fit self-center bottom-12'>
          <button className='bg-red-700 px-3 py-1 m-3 text-white rounded-full justify-center' onClick={() => setColor("red")}>Red</button>
          <button className='bg-yellow-300 px-3 py-1 m-3 text-white rounded-full ' onClick={() => setColor("yellow")}>Yellow</button>
          <button className='bg-green-600 px-3 py-1 m-3 text-white rounded-full' onClick={() => setColor("green")}>Green</button>
          <button className='bg-blue-600 px-3 py-1 m-3 text-white rounded-full' onClick={() => setColor("blue")}>Blue</button>
          <button className='bg-cyan-800 px-3 py-1 m-3 text-white rounded-full' onClick={() => setColor("cyan")}>Cyan</button>
          <button className='bg-orange-700 px-3 py-1 m-3 text-white rounded-full' onClick={() => setColor("orange")}>Orange</button>
        </div>
      </div>

    </>
  )
}

export default App
