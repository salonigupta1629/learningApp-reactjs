import React from 'react'
import Logo from './logo'
import { NavLink } from 'react-router'
import { courses } from './data'

const Section = () => {

const CourseCard = (props) => {
  return (
    <NavLink to={`/${props.name}/${props.id}`}>
   <div className='w-28 h-18 ml-5.5 mt-6 p-3.5 text-xl  text-center mx-auto 
    font-semibold bg-black text-white hover:bg-purple-300 hover:text-black rounded-lg'>
        <h2>{props.name}</h2>
    <h4 className='font-normal text-[14px]'>{props.duration}</h4>
    </div>
    </NavLink>
  )
}

  return (
    <div className='h-74  flex flex-1 justify-between '>
      <div className=' bg-white grid grid-cols-5 gap-4 '>
     {
      courses.map((data) => <CourseCard id={data.id} key={data.id} name={data.name} duration={data.duration}/>
     )}
      </div>
      <div className='w-[800px] h-24 '>
      <Logo/>
      </div>
    </div>
  )
}

export default Section