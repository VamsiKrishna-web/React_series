import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
          <img
            class="mx-auto block h-60 rounded-full sm:mx-0 sm:shrink-0"
            src="./src/assets/girl.jpg"
          />
          <div class="space-y-2 text-center sm:text-left">
            <div class="space-y-0.5">
              <p class="text-lg font-semibold text-black">Erin Lindford</p>
              <p class="font-medium text-gray-500">Product Engineer</p>
            </div>
            <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
              Message
            </button>
          </div>
        </div>

        <h1 className="bg-green-400 text-black p-4 rounded-xl">
          Tailwind css with props
        </h1>
      </div>
    </>
  );
}

export default App
