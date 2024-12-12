import './App.css'
import AppHeader from './components/AppHeader.jsx'
import AppCard from './components/AppCard.jsx'
import AppFooter from './components/AppFooter.jsx'

function App() {

  return (
    <>
        <AppHeader />
        <div className="container">
          <AppCard />
        </div>
        <AppFooter />
    </>
  )
}

export default App
