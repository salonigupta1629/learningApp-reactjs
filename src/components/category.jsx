import React from 'react'
import { courses } from './data'

const Category = () => {
  return (
    <div className='flex flex-1 bg-slate-300 gap-7 p-3 font-semibold text-xl pl-7  '>
{courses.map((data) => <h3 key={data.id} className='hover:bg-purple-300 hover:text-white '>{data.name}</h3> )}
    </div>
  )
}

export default Category