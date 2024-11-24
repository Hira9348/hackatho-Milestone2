import React from 'react'

const Skills = () => {
  return (
    <div id='Skills' className='container '>
      <div className='grid grid-cols-2 gap-40 my-10'>
        <div data-aos="flip-right">
          <h2 className='text-4xl md:text-5xl '>Technologies I Work With:</h2>
          <p className='text-gray-600 pt-2'>
          I have asolid foundation in web development, specialiazing in HTML,CSS and Javascript.My experience extend to using frameworks like React and Next.js
         to create dynamic and user-freindly applications . I&apos;m also proficient in Tailwind CSS for efficient styling and design . I stay updated
         on the latest technologies to enhance my skills set and contriute effectively to projects.
          </p>
          </div>
          <div>
            <div className='grid grid-cols-2 gap-40  text-yellow-500 text-3xl sm:text-4xl text-left'>
            <div className='space-y-2 my-30'>
              <h2 data-aos="flip-right">Typescript</h2>
              <h2 data-aos="flip-right">React.js</h2>
              <h2 data-aos="flip-right">Next.js</h2>

            </div>

            <div className='space-y-2 my-30'>
              <h2 data-aos="flip-right">Tailwind</h2>
              <h2 data-aos="flip-right">CSS</h2>
              <h2 data-aos="flip-right">Node.js</h2>

            </div>
          </div>
        </div>
      </div>
      </div>
    
  )
}

export default Skills



