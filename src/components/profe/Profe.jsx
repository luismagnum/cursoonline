import React from 'react'
import profe from '../../assets/profe.png'

const Profe = () => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 mx-4 mb-14'>
      <img src={profe} alt='img2'width={500}/>
      <div className='space-y-4 lg:pt-2 mx-4 mb-4'>
        <h1 className='text-sky-900 font-bold text-3xl text-start'>Profesora</h1>
        <p className='text-base md:text-xl text-gray-800 font-medium text-justify'>
        Karin Centenaro es una apasionada educadora con más de 20 años de experiencia en la enseñanza de idiomas.
        Con un enfoque dinámico y personalizado, ella se especializa en hacer que el aprendizaje sea accesible y divertido
        para estudiantes de todos los niveles. Su habilidad para conectar con los estudiantes y adaptar su enseñanza a diferentes
        estilos de aprendizaje ha ayudado a muchos a alcanzar sus objetivos lingüísticos.  
        </p>
        </div>
      </div>
    </div>
  )
}

export default Profe
