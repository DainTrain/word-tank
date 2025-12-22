import { useState } from 'react'
import './App.css'
import { cn } from '@/lib/utils';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-8 text-2x1 font-bold text-blue-600'>
      tailwind is working
    </div>
  )
}

export default App
