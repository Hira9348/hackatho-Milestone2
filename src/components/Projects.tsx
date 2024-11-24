import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data =[
{
    id:0,
    title:"Static Resume ",
    desc:"A Typescript-based interactive resume built wit HTML and CSS ,allowing users to showcase their dynamically.",
    img:"/project1.jpg",
    tags:["React", "Node", "CSS", "Typescript"],
},
{
    id:1,
    title:"Countdown Timer",
    desc:"A Next.js and Typescript powered website to track time with an interactive countdown feature.",
    img:"/project2.jpg",
    tags:["React", "Node", "CSS", "Typescript"],
},


]

const project = () => {
  return (
    <div id='projects' >
      <Heading title='My Projects'/>
      <div className='grid gap-4  md:grid-cols-2  place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
      
    </div>
  )
}

export default project
