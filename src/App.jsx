import { useEffect, useState } from 'react'
import LoadingScreen from './components/Common/LoadingScreen'
import Home from './pages/Home'


function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // setTimeout(() => setLoading(false), 2300)
  }, [])
  return (
    <>
      {!loading ? <LoadingScreen /> : (
        <Home />
      )}
    </>
  )
}

export default App
