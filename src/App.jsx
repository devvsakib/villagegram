import { useEffect, useState } from 'react'
import LoadingScreen from './components/Common/LoadingScreen'


function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 2300)
  }, [])
  return (
    <>
      {loading ? <LoadingScreen /> : (
        <div className='flex justify-center items-center h-screen'>
          <h2 className='text-orange-400 font-bold'>Hlll</h2>
        </div>
      )}
    </>
  )
}

export default App
