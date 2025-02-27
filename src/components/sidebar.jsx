import React from 'react'

const Sidebar = ({chapters}) => {
  return (
    <div>
      {
        chapters.map((chapter) =>(
          <div key={chapter.id}>
<h3>{chapter.name}</h3>
<ul>
  {
    chapters.topics.map((topic) =>(
      <li key={topic.id}>{topic.name}</li>
    ))
  }
</ul>
            </div>
        ))
      }
    </div>
  )
}

export default Sidebar