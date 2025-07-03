import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateBlog from './pages/CreateBlog'
import Blog from './pages/Blog'
import UpdateBlog from './pages/UpdateBlog'
import Login from './pages/Login'
import Register from './pages/Register'
import Hero from './pages/Hero'
import SignIn from './pages/SignIn'
import SignUp from './pages/Register'


const App = () => {
  return (
    <Router>
          <Routes>
              <Route path='/' element = {<Home/>}/> 
              <Route path='/signin' element = {<SignIn/>}/> 
        
              <Route path='/blog/:id' element = {<Blog/>}/>
          
              <Route path='/blog/create' element = {<CreateBlog/>}/>
          
              <Route path='/blog/update/:id' element = {<UpdateBlog/>}/>

              <Route path='/user/login' element = {<Login/>}/>

              <Route path='/user/register' element = {<Register/>}/>
              <Route path='/user/hero' element = {<Hero/>}/>
          </Routes>
    </Router>
  )
}

export default App