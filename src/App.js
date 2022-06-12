import {Routes,Route} from 'react-router-dom'
import Bike from './pages/Bike';
import AddBike from './pages/AddBike'
import Favorites from './pages/Favorites'
// import MainNavigation from './components/layouts/MainNavigation'
import Layout from './components/layouts/Layout';

function App() {
 return(<div>
   <Layout>
   <Routes>
     <Route path = '/' element = {<Bike />} />
     <Route path = '/add' element = {<AddBike />} />
     <Route path = '/fav' element = {<Favorites />} />
   </Routes>
   </Layout>
 </div>
 )
}

export default App;
