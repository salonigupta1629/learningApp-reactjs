import React from 'react'
import Navbar from './components/navbar'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import ViewCourse from './components/ViewCourse'
import { courses } from './components/data'


const App = () => {
  return (
    <div className='bg-white h-screen flex flex-1 flex-col'>
      <Navbar/>
      <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path={`/${courses.name}/${courses.id}`} element={<ViewCourse/>}/>
      </Routes>
      </div>

  )
}  

export default App   