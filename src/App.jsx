import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateBlog from './pages/CreateBlog'
import Blog from './pages/Blog'
import UpdateBlog from './pages/UpdateBlog'
import Login from './pages/Login'
import Register from './pages/Register'
import Hero from './pages/Hero'
import SignIn from './pages/Login'
import SignUp from './pages/Register'
import UserProfile from './pages/UserProfile'


const App = () => {
  return (
    <Router>
          <Routes>
              <Route path='/' element = {<Home/>}/> 
              {/* <Route path='/signin' element = {<SignIn/>}/>  */}
        
              <Route path='/blog/:id' element = {<Blog/>}/>
          
              <Route path='/blog/create' element = {<CreateBlog/>}/>
          
              <Route path='/blog/update/:id' element = {<UpdateBlog/>}/>

              <Route path='/user/login' element = {<Login/>}/>

              <Route path='/user/register' element = {<Register/>}/>

              <Route path='/user/hero' element = {<Hero/>}/>

              <Route path="/user/profile" element={<UserProfile />} />
          </Routes>
    </Router>
  )
}

export default App