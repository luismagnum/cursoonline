import React from 'react'
import vivo from '../../assets/vivo.png'
import online from '../../assets/online.png'
import principi from '../../assets/principi.png'

const Modalidad = () => {
  return (
    <div>
        <div className='text-center justify-items-center mx-auto mt-16 mb-10'>
        <h1 className='text-3xl text-sky-900 font-bold mb-10'>Que Ofrecemos?</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 text-center mx-auto'>
        <div class="text center mx-auto w-80 p-4 bg-white rounded-lg shadow-md ">
            <img src={vivo} alt=''/>
              <div class="p-4">
              <h2 class="text-xl  font-semibold">En vivo y en linea</h2>
              <p class="text-gray-600 text-justify">
              Nuestras clases online en Zoom son lecciones en vivo de 60 minutos con profesores cualificados.
              </p>
        </div>
    </div>
    <div class="text center mx-auto w-80 p-4 bg-white rounded-lg shadow-md ">
            <img src={online} alt=''/>
              <div class="p-4">
              <h2 class="text-xl  font-semibold">Practicas en vivo</h2>
              <p class="text-gray-600 text-justify">
              Nuestras clases en grupos son de hasta 5, por lo que siempre dispondrás de tiempo para hablar.
              </p>
        </div>
    </div>
    <div class="text center mx-auto w-80 h-96 p-4 bg-white rounded-lg shadow-md ">
            <img src={principi} alt=''/>
              <div class="p-4">
              <h2 class="text-xl  font-semibold">Principiante a avanzado</h2>
              <p class="text-gray-600 text-justify">
              Con clases disponibles de A1 a C1, puedes elegir el nivel que mejor se adapte a tus necesidades.
              </p>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Modalidad