import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import axios from 'axios'
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function Des({ id }) {


    function scrollToTop() {
        window.scrollTo({
            top: 0
        });
    }

    scrollToTop()

    Aos.init()

    const [maquina, setMaquina] = useState({
        DESCRIPCION: '',
        ID_CATEGORIA: 0,
        ID_PRODUCTO: 0,
        IMAGEN: '',
        MODELO: '',
        NOMBRE: ''
    })

    const [carac, setCarac] = useState([])


    const [tablaHead, setTablaHead] = useState([])

    const [tablaBody, setTablaBody] = useState([])

    const [ficha, setFicha] = useState([])


    useEffect(() => {

        let url = `https://apifutura.apexmaicol.online/Vproducto/${id}`

        let url2 = `https://apifutura.apexmaicol.online/AVprueba/${id}`

        let url3 = `https://apifutura.apexmaicol.online/AVcaracteristica/${id}`

        let url4 = `https://apifutura.apexmaicol.online/Avespecificaciones/${id}`

        axios.get(url)
            .then(res => {

                setMaquina(res.data[0])
                //console.log(maquina)
            })

        axios.get(url2)
            .then(res => {
                setTablaBody(res.data)
                setTablaHead(res.data[0].Horarios)
                //console.log(tablaBody)
            })

        axios.get(url3)
            .then(res => {
                setCarac(res.data[0])
                ///console.log(carac);
            })

        axios.get(url4)
            .then(res => {

                setFicha(res.data);
            })

        //console.log(id);
    }, [])

    return (
        <div className="overflow-hidden bg-[url('bg.jpg')] bg-cover bg-repeat">

            <div className='w-full h-14 md:h-16 fixed z-50'>
                <Navbar />
            </div>


            <div data-aos="fade-left"
                className=' flex items-center pt-20'>
                <span className='text-white px-4 font-bebas text-4xl 2xl:text-6xl'>CATÁLOGO</span>
                <span className='border-2 border-white w-full'></span>
            </div>

            <div data-aos="fade-right"
                className='flex justify-center py-5'>
                <div className=' border-l-2 border-b-2 w-3/4 h-16 flex items-end'>
                    <div className='w-full bg-futura-primary2 h-3/4 flex items-center'>
                        <span className='text-white pl-3 text-2xl xl:text-4xl font-abel'>
                            {maquina.NOMBRE}
                        </span>

                    </div>
                </div>
            </div>


            <div className='w-full flex flex-col items-center'>

                {/* DISEÑO */}
                <div className='max-w-screen-2xl'>

                    {/* BARRA */}
                    <div data-aos="fade-left"
                        className='px-4 xl:text-xl'>
                        <div className='flex justify-around border-y-2 border-futura-primary2 text-white font-abel'>
                            <span className='w-full text-center border-l-2 border-futura-primary2 bg-futura-primary2'>
                                Diseño
                            </span>
                            <span className='w-full text-center border-l-2 border-futura-primary'>
                                Caracteristicas
                            </span>
                            <span className='w-full text-center border-x-2 border-futura-primary'>
                                Especificaciones
                            </span>
                        </div>
                    </div>

                    <div className='pt-10'>

                        <div className='grid lg:grid-cols-2 gap-5 xl:h-[50vh] xl:items-center xl:justify-center'>

                            <div data-aos="fade-right"
                                className='flex justify-center items-center relative'>
                                <img className='w-3/4 ' src={maquina.IMAGEN} alt="" />
                                <div className='flex flex-col absolute bottom-0 bg-futura-primary2 text-white px-1 px-2 text-sm'>
                                    <span className='text-xs'>CABEZALES</span>
                                    <span className='text-lg font-bold'>EPSON</span>
                                </div>
                            </div>

                            <div>
                                <div className='text-white flex flex-col gap-4 px-5 font-abel' >
                                    <h1 data-aos="fade-up"
                                        className='text-center text-2xl md:text-5xl lg:text-3xl xl:text-5xl'>{maquina.MODELO}</h1>

                                    <p data-aos="fade-down"
                                        className='border-2  text-sm p-2 text-center md:text-xl md:text-justify lg:text-sm xl:text-xl xl:text-center xl:border-0'>
                                        {maquina.DESCRIPCION}
                                    </p>

                                    <div data-aos="fade-left"
                                        className='flex justify-center'>
                                        <table className="text-center table-auto text-white text-[9px] md:text-[14px] lg:text-[9px] xl:text-[11px]">
                                            <thead>
                                                <tr className='bg-futura-primary2'>


                                                    <th className="p-1">Velocidad</th>

                                                    {
                                                        tablaHead.map(i => {
                                                            //console.log(i.Modelo)
                                                            return <th key={i.Modelo} className="p-1">{i.Modelo}</th>
                                                        })

                                                    }
                                                </tr>
                                            </thead>
                                            <tbody className='text-center'>

                                                {
                                                    tablaBody.map(i => (
                                                        <tr key={uuidv4()}>
                                                            <td className="border border-futura-primary2">{i.Velocidad}</td>

                                                            {
                                                                i.Horarios.map(td => (
                                                                    <td key={uuidv4()} className="border border-futura-primary2">{td.Velocidad}m²/h</td>
                                                                ))
                                                            }

                                                        </tr>
                                                    ))
                                                }


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                {/* CARACTERISTICAS */}
                <div className='max-w-screen-2xl pt-32 pb-10  xl:h-[110vh] xl:flex flex-col justify-center'>

                    {/* BARRA */}
                    <div data-aos="fade-up"
                        className='px-4 xl:text-xl'>
                        <div className='flex justify-around border-y-2 border-futura-primary2 text-white font-abel'>
                            <span className='w-full text-center border-l-2 border-futura-primary2 '>
                                Diseño
                            </span>
                            <span className='w-full text-center border-l-2 border-futura-primary bg-futura-primary2'>
                                Caracteristicas
                            </span>
                            <span className='w-full text-center border-x-2 border-futura-primary'>
                                Especificaciones
                            </span>
                        </div>
                    </div>

                    <div className='pt-10 '>

                        <div className='grid lg:grid-cols-2 gap-5 xl:h-[50vh] xl:items-center xl:justify-center'>

                            <div>
                                <div className='text-white flex flex-col gap-4 font-abel px-1' >
                                    <h1 data-aos="fade-left"
                                        className='md:text-center md:pl-0 pl-4 font-bebas text-futura-primary2 text-4xl md:text-5xl lg:text-3xl xl:text-5xl'>
                                        CARACTERISTICAS </h1>

                                    <p data-aos="fade-left"
                                        className='p-2 md:px-10 md:text-xl md:text-center lg:text-sm xl:text-xl xl:text-center px-3'>
                                        {carac.DESCRIPCION}
                                    </p>

                                    <div className='flex justify-center'>

                                        <div className='flex gap-3 text-lg font-bebas'>
                                            <div data-aos="fade-right"
                                                className='text-red-400 h-16 w-20 rounded-lg border-2 border-red-400 flex flex-col justify-center items-center'>
                                                <span>EPSON</span>
                                                <span>{carac.MARCA_CABEZAL}</span>
                                            </div>

                                            <div data-aos="fade-up"
                                                className='text-white h-16 w-20 rounded-lg border-2 flex flex-col justify-center items-center'>
                                                <span className='text-3xl'>{carac.CABEZALES}</span>
                                                <span>CABEZALES</span>
                                            </div>

                                            <div data-aos="fade-down"
                                                className='text-white h-16 w-20 rounded-lg border-2 flex flex-col justify-center items-center'>
                                                <span className='text-3xl'>{carac.COLORES}</span>
                                                <span>COLORES</span>
                                            </div>

                                            <div data-aos="fade-left"
                                                className='text-white h-16 w-20 rounded-lg border-2 flex flex-col justify-center items-center'>
                                                <span className='text-3xl'>{carac.MAX_POTENCIA}</span>
                                                <span>MAX</span>
                                            </div>



                                        </div>

                                    </div>

                                    <div data-aos="fade-up"
                                        className='flex justify-center w-full py-5'>
                                        <img className='w-11/12 xl:w-3/4' src={carac.IMAGEN2} alt="" />
                                    </div>

                                </div>
                            </div>

                            <div data-aos="fade-left"
                                className='flex justify-center items-center py-10'>
                                <img className='w-3/4 xl:h-3/4' src={carac.IMAGEN} alt="" />

                            </div>
                        </div>

                    </div>
                </div>

                {/* ESPEFICICACIONES */}
                <div className='max-w-screen-2xl py-20'>

                    <div data-aos="fade-up"
                        className='px-4  pb-10 xl:text-xl'>
                        <div className='flex justify-around border-y-2 border-futura-primary2 text-white font-abel'>
                            <span className='w-full text-center border-l-2 border-futura-primary2 '>
                                Diseño
                            </span>
                            <span className='w-full text-center border-l-2 border-futura-primary '>
                                Caracteristicas
                            </span>
                            <span className='w-full text-center border-x-2 border-futura-primary bg-futura-primary2'>
                                Especificaciones
                            </span>
                        </div>
                    </div>

                    <h1 data-aos="fade-down"
                        className='md:text-center md:pl-0 pl-4 font-bebas text-futura-primary2 text-4xl md:text-5xl lg:text-3xl xl:text-5xl'>
                        Especificaciones tecnicas </h1>

                    <div data-aos="fade-up"
                        className='p-3'>
                        <div className=' '>

                            {
                                ficha.map((post) => (
                                    <div className='grid lg:grid-cols-2
                                    ' key={post.ID}>
                                        <img src={post.PIMAGENES} alt="" />
                                        <img src={post.SIMAEGNES} alt="" />
                                    </div>


                                ))
                            }

                        </div>
                    </div>

                </div>

                <div className='pb-10'>

                    <a className='text-white text-3xl bg-futura-primary2 rounded-xl px-4'
                        href='https://wa.me/+51994099669' target="_blank" >Cotiza aquí</a>
                </div>

            </div>

            <Footer />

        </div>
    )
}
