import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Team from './pages/Team'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import CreateUser from './pages/CreateUser'
import BarChart from './pages/BarChart'
import LineChart from './pages/LineChart'
import PieChart from './pages/PieChart'


function App() {

  return(
  <BrowserRouter>
          <Routes>
            <Route path="/" element ={<Dashboard/>}>
              <Route index element = {<Home/>}/>
              <Route path='/team' element={<Team/>}/>
              <Route path='/contacts' element={<Contacts/>}/>
              <Route path='/create-user' element={<CreateUser/>}/>
              <Route path='/bar' element={<BarChart/>}/>
              <Route path='/line' element={<LineChart/>}/>
              <Route path='/pie' element={<PieChart/>}/>
            </Route>
          </Routes>
  </BrowserRouter>

  )
}

export default App
