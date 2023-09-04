import { Route,Routes } from 'react-router-dom'
import './App.css'
import { DashboardComponent } from './components/DashboardComponent/DashboardComponent'
import { HomepageComponent } from './pages/HomepageComponent/HomepageComponent'
import { RouterPath } from './router/RouterPath'


function App() {

  return (
    <div className='flex '>
      <DashboardComponent/>
      
      <Routes>
        <Route {...RouterPath.Home} />
        <Route path='Home' Component={HomepageComponent} />
        <Route {...RouterPath.Favourites}/>
        <Route {...RouterPath.Trending} />
        <Route {...RouterPath.Calender} />

      </Routes>

    </div>
  )
}

export default App
