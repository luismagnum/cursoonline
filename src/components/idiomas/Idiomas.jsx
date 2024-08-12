import React from 'react'
import usa from '../../assets/usaflag.png'
import br from '../../assets/brflag.png'

const Idiomas = () => {
    return (
      <div className='text-center justify-items-center mx-auto mt-0 md:mt-10 mb-10 px-4 md:px-8'>
        <h1 className='text-3xl text-gray-600 font-bold mb-4'>Idiomas</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='text-center mx-auto w-full md:w-3/4 p-4 bg-white rounded-lg shadow-md'>
            <img src={br} alt='' className='mx-auto'/>
            <div className='p-2'>
              <h2 className='text-xl font-semibold'>Portugués de Brasil</h2>
              <p className='text-gray-600 text-justify'>
                Aprender portugués facilita la comunicación con más de 200 millones de personas y es especialmente útil en negocios internacionales, 
                dado el creciente impacto económico de Brasil. Además, el portugués es similar al español, lo que puede hacer el aprendizaje más accesible 
                para hispanohablantes. Conocer el idioma también permite disfrutar plenamente de destinos turísticos en Brasil, desde sus playas hasta la vibrante vida urbana.
              </p>
            </div>
          </div>
          <div className='text-center mx-auto w-full md:w-3/4 p-4 bg-white rounded-lg shadow-md'>
            <img src={usa} alt='' className='mx-auto'/>
            <div className='p-2'>
              <h2 className='text-xl font-semibold'>Estados Unidos</h2>
              <p className='text-gray-600 text-justify'>
                Hablar inglés te permite acceder a oportunidades laborales internacionales y a una gran cantidad de recursos educativos. Además, 
                es la lengua oficial en muchos países y el idioma principal en Internet, lo que facilita la conexión con personas de todo el mundo.
                Aprender inglés también te brinda acceso a una vasta cultura, desde literatura y cine hasta música y medios de comunicación, ampliando tu perspectiva global.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Idiomas
  