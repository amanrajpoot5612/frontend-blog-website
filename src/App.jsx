import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateBlog from './pages/CreateBlog'
import Blog from './pages/Blog'
const App = () => {
  return (
    <Router>
          <Routes>
              <Route path='/' element = {<Home/>}/>
        
              <Route path='/blog/:id' element = {<Blog/>}/>
          
              <Route path='/blog/create' element = {<CreateBlog/>}/>
          
              {/* <Route path='/blog/delete/:id' element = {<DeleteBlog/>}/> */}
          </Routes>
    </Router>
  )
}

export default App