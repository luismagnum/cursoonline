import React from 'react'
import { FaFacebook, FaInstagram, } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import Boton from '../boton/Boton'

const section = [
    {
        title:"Soluciones",
        items:["cursos","ingles","portugues"]
    },
    {
        title:"Soluciones",
        items:["cursos","ingles","portugues"]
    },
    {
        title:"Soluciones",
        items:["cursos","ingles","portugues"]
    },
]

const items = [
    {
        name:"Facebook",
        icon:FaFacebook,
        link: 'https://facebook.com'
    },
    {
        name:"Instagram",
        icon:FaInstagram,
        link: 'https://twitter.com'
    },
    {
        name:"Twitter",
        icon:FaXTwitter,
        link: 'https://twitter.com'
    },
]

const Footer = () => {
  return (
    <div className='w-full mt-12 bg-slate-900 text-gray-300 py-y px-2'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-4'>
        {
            section.map((section,index)=>(
                <div key={index}>
                    <h6 className='font-bold uppercase pt-2'>
                        {section.title}
                    </h6>
                    <ul>
                        {section.items.map((item,i)=>(
                            <li key={i}
                            className='py-1 text-gray-500 hover:text-white cursor-pointer'>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))
        }
        <div className='col-span-2 pt-8 md:pt-2'>
            <p className='font-bold uppercase'>
                Quiero Inscribirme
            </p>
            <div className='flex flex-col sm:flex-row sm:justify-center sm:items-center text-center mx-auto'>
            <Boton /> 
            </div>
        </div>
      </div>
        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between
        sm:flex-row text-center text-gray-500'>
            <p className='py-4'>
                @2024 Dev Luis E. Diaz.
            </p>

            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                {
                    items.map((x,index)=>{
                        return <x.icon key={index} className='hover:text-white cursor-pointer'/>
                })
                }
            </div>
        </div>
    </div>
  )
}

export default Footer
