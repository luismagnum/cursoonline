import React from 'react'

const Hero = () => {
  return (
    <div className ='w-full h-80  md:min-h-screen  flex flex-col justify-center items-center lg:px-32 px-5 bg-[url(assets/survey.jpg)] bg-contain md:bg-cover bg-no-repeat'>
      <div className='w-full ml-0 space-y-5 px-5 lg:px-0 mb-10 lg:mb-28'>
        <h1 className='text-left text-teal-500 font-bold text-xl md:text-5xl'>CURSOS</h1>
        <p className=' text-teal-500 w-1/3 text-sm md:text-2xl font-bold'>
          Educacion y aprendizaje en linea.
        </p>
      </div>
    </div>
  )
}
export default Hero