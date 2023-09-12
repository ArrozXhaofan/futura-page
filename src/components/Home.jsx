import React, { useState, useEffect, useRef } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

import { BsChevronLeft, BsChevronRight, BsInstagram } from 'react-icons/bs'
import { BiCaretLeftCircle, BiCaretRightCircle } from 'react-icons/bi'
import { FaFacebookF, FaWhatsapp, FaTiktok } from 'react-icons/fa'
import Footer from './Footer'

import Aos from 'aos';

export default function Home({ setId }) {


    const [px, setPx] = useState(0)
    const [centro, setCentro] = useState(0)
    const [xCatalogo, setXcatalogo] = useState(0)

    const moverNext = () => {
        if (navi.length - 1 <= px) {
            setPx(0)
            //console.log('maximo')
        }
        else {
            setPx(px + 1)
            //console.log(px);
        }
    }
    const moverPrev = () => {
        if (px == 0) {
            setPx(navi.length - 1)
        } else {
            setPx(px - 1)
        }
    }

    Aos.init()

    useEffect(() => {

        let url = 'https://apifutura.apexmaicol.online/Vproductos'
        axios.get(url)
            .then(res => {
                setCatalogo(res.data)
            })
    }, [])

    const navi = [
        { id: 1, img: 'bannerM.jpg', indice: 0, },
        { id: 2, img: 'bannerM.jpg', indice: 1 },
        { id: 3, img: 'bannerM.jpg', indice: 2 },
        { id: 4, img: 'bannerM.jpg', indice: 3 },
        { id: 5, img: 'bannerM.jpg', indice: 4 },
    ]

    const navi2 = [
        { id: 1, img: 'bannerL.jpg', indice: 0, },
        { id: 2, img: 'bannerL.jpg', indice: 1 },
        { id: 3, img: 'bannerL.jpg', indice: 2 },
        { id: 4, img: 'bannerL.jpg', indice: 3 },
        { id: 5, img: 'bannerL.jpg', indice: 4 },
    ]

    const centros = [
        { id: 1, img: 'centros/centroP.jpeg', indice: 0 },
        { id: 2, img: 'centros/centroB.jpeg', indice: 1 },
        { id: 3, img: 'centros/centroL.jpeg', indice: 2 },
    ]

    const [catalogo, setCatalogo] = useState([
        { id: 1, imagen: 'https://www.sinergiavisual.com/wp-content/uploads/2018/02/HP-SCITEX-FB550.png', nombre: 'Hibrida UV ED400UV' },
    ])






    const indiceBanner = (i) => {
        let clase = 'bg-futura-secondary'
        if (i == px)
            clase = 'bg-futura-primary2'
        else {
            clase = 'bg-neutral-700'
        }
        return clase
    }

    const nextCentro = () => {
        if (centros.length - 1 <= centro) {
            setCentro(0)
        }
        else {
            setCentro(centro + 1)
        }
    }
    const prevCentro = () => {
        if (centro == 0) {
            setCentro(2)
        } else {
            setCentro(centro - 1)
        }
    }

    const nextCatalogo = () => {

        let ancho = window.innerWidth
        let guia = (catalogo.length - 2) / 2

        if (ancho > 768) {
            if (guia <= xCatalogo / 100) {
                setXcatalogo(0)
            }
            else {
                setXcatalogo(xCatalogo + 100)
                console.log(xCatalogo);
            }
        }
        else {
            if (catalogo.length - 1 <= xCatalogo / 100) {
                setXcatalogo(0)
            }
            else {
                setXcatalogo(xCatalogo + 100)

            }
        }


    }


    const prevCatalogo = () => {


        let ancho = window.innerWidth
        let guia = (catalogo.length - 2) / 2

        if (ancho > 768) {
            if (xCatalogo == 0) {
                setXcatalogo(guia * 100)
                console.log('choque');
            }
            else {
                setXcatalogo(xCatalogo - 100)
                console.log(guia);
            }
        }
        else {
            if (xCatalogo == 0) {
                setXcatalogo((catalogo.length - 1) * 100)

            } else {
                setXcatalogo(xCatalogo - 100)

            }
        }



    }




    const refForm = useRef()

    const sendEmail = (event) => {
        event.preventDefault()

        const serviceId = 'service_r3vk0oa'
        const templateId = 'template_7d6y2m9'
        //3er parametro
        const apiKey = 'LSDL9tUMXdMjKOyZa'

        emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
            .then(res => alert('Enviado! ', res))
            .catch(error => console.error(error))

        refForm.current.reset()
    }

    const capturarId = (parametro) => {
        setId(parametro)
        //console.log(id);
    }



    return (

        //overflow-hidden
        <div className="2xl:flex justify-center bg-[url('bg.jpg')] bg-cover bg-repeat">

            <div className='w-full h-14 md:h-16 fixed z-50'>
                <Navbar />
            </div>
            <div className="min-h-screen overflow-hidden 2xl:max-w-screen-2xl ">




                {/* CARRUSEL 1 */}
                <div className='pt-14 lg:hidden'>
                    <div className='relative'>
                        <div style={{ transform: `translateX(-${px}00%)` }}
                            className={`flex  duration-300  transition`}>
                            {
                                navi.map(i => (
                                    <img className='w-full' key={i.id} src={i.img} alt="" />
                                ))
                            }
                        </div>

                        <div className=''>
                            <button className='text-3xl absolute top-2/4 left-0  bg-black opacity-40'>
                                <BsChevronLeft onClick={moverPrev} className='text-white' />
                            </button>
                            <button className='text-3xl absolute top-2/4 right-0  bg-black opacity-40'>
                                <BsChevronRight onClick={moverNext} className='text-white' />
                            </button>

                            <div className='flex absolute w-full h-7 bg-futura-secondary 
                        opacity-70 bottom-0 items-center justify-center gap-3'>

                                {
                                    navi.map(i => (
                                        <div key={i.id} className={`h-5 w-5 rounded-full ${indiceBanner(i.indice)}`}></div>
                                    ))
                                }

                            </div>
                        </div>

                    </div>
                </div>
                {/* CARRUSEL 2 */}
                <div className='pt-14 hidden lg:block'>
                    <div
                        className='relative'>
                        <div style={{ transform: `translateX(-${px}00%)` }}
                            className={`flex duration-300 transition`}>
                            {
                                navi2.map(i => (
                                    <img className='w-full' key={i.id} src={i.img} alt="" />
                                ))
                            }
                        </div>

                        <div className=''>
                            <button className='text-3xl absolute top-2/4 left-0  bg-black opacity-40'>
                                <BsChevronLeft onClick={() => { moverPrev() }} className='text-white' />
                            </button>
                            <button className='text-3xl absolute top-2/4 right-0  bg-black opacity-40'>
                                <BsChevronRight onClick={() => { moverNext() }} className='text-white' />
                            </button>

                            <div className='flex absolute w-full h-7 bg-futura-secondary 
                        opacity-70 bottom-0 items-center justify-center gap-3'>

                                {
                                    navi.map(i => (
                                        <div key={i.id} className={`h-5 w-5 rounded-full ${indiceBanner(i.indice)}`}></div>
                                    ))
                                }

                            </div>
                        </div>

                    </div>
                </div>

                {/* COTIZA */}
                <div>
                    <div className='pt-6 flex items-center flex-col'>
                        <span className='h-4 border-y-4 border-white w-3/4'></span>

                        <div className='flex gap-5'>


                            <div className='py-4'>
                                <a href='https://catalogofutura.futuradigital.tech/mobile/index.html' target="_blank" className='text-xl text-white bg-futura-primary2 rounded-full 
                        px-5 py-0.5 hover:bg-white hover:text-futura-primary2 duration-300 hover:scale-110'>
                                    Ver cátalogo
                                </a>
                            </div>

                            <div className='py-4'>
                                <a href='https://wa.me/+51994099669' target="_blank" className='text-xl text-white bg-futura-primary2 rounded-full 
                        px-5 py-0.5 hover:bg-white hover:text-futura-primary2 duration-300 hover:scale-110'>
                                    Cotiza aqui
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* NOSOTROS */}
                <div className='py-5 flex justify-between items-center font-bebas'>
                    <span data-aos="flip-left" className='border-2 border-white w-full'></span>
                    <span className='text-white text-3xl xl:text-6xl px-6'>NOSOTROS</span>
                    <span data-aos="flip-left" className='border-2 border-white w-full'></span>
                </div>

                <div className='grid md:grid-cols-2'>

                    <div data-aos="fade-down-right">
                        <img className='md:h-full md:object-content' src="g1.jpeg" alt="" />
                    </div>

                    <div data-aos="fade-down-left"
                        className='p-10 text-center text-white bg-futura-primary2 font-abel lg:flex lg:text-2xl justify-center items-center'>
                        <p className='flex flex-col gap-3'>
                            <span>Futura Evolution te da la bienvenida, estamos ingresando a una nueva era
                                tecnológica y queremos invitarte a conocer y disfrutar de nuestras nuevas
                                fórmulas de negocio, y el potencial de equipos de última generación para
                                la industria publicitaria que tenemos para ofrecerte.</span>
                            <span>
                                El mercado publicitario está avanzando cada día más rápido en todo el mundo,
                                y estamos listos para acompañarte en el camino que elijas para tu negocio.</span>
                            <span>
                                Agradecemos como siempre tu preferencia y ponemos a tu disposición toda la información
                                necesaria que requieres a través de nuestras redes sociales y como siempre con la calidez
                                y calidad de nuestros asesores.</span>
                        </p>
                    </div>

                    <div data-aos="fade-up-right"
                        className='relative'>
                        <img className='md:h-full md:object-cover' src="g2.jpeg" alt="" />
                        <div className='absolute top-1/2 right-14 text-white flex flex-col font-bebas text-3xl text-end'>
                            <span>NUESTRO EQUIPO</span>
                            <span className='px-1 bg-white text-futura-primary2'>NUESTRO MEJOR VALOR</span>
                        </div>
                    </div>

                    <div data-aos="fade-up-left"
                        className=' flex flex-col items-center bg-futura-negro'>
                        <div className='h-24 border-l-2 border-b-2 border-white w-3/4 relative'>
                            <div className='absolute bottom-0 bg-futura-primary2 w-full h-1/2 flex items-center pl-2'>
                                <span className=' text-white font-abel text-2xl'>
                                    25 AÑOS DE EXPERIENCIA
                                </span>

                            </div>
                        </div>

                        <div className='p-14'>
                            <p className='font-abel text-white text-center text-2xl lg:text-4xl'>
                                Futura digital 25 años apoyando a las empresas, emprendedores de la
                                industria publicitaria con las mejores maquinas del Perú,
                                ofreciéndoles garantía y calidad al mejor precio del mercado.
                            </p>
                        </div>

                    </div>
                </div>


                <div className='flex py-10 w-full justify-center'>
                    <span data-aos="flip-up" className='h-4 border-y-4 border-white w-3/4'></span>
                </div>


                {/* CENTROS */}
                <div className='py-10 flex justify-between items-center font-bebas'>
                    <span data-aos="flip-left" className='border-2 border-white w-full'></span>
                    <span data-aos="flip-up" className='text-white text-3xl xl:text-6xl px-6'>CENTROS</span>
                    <span data-aos="flip-left" className='border-2 border-white w-full'></span>
                </div>
                <div data-aos="zoom-in"
                    className='flex justify-center '>
                    <div className='relative lg:h-[600px] lg:w-[600px] overflow-hidden xl:hover:scale-110 hover:scale-90 duration-300 transition ease-in-out'>
                        <div style={{ transform: `translateX(-${centro}00%)` }}


                            className={`flex transition duration-400`}>
                            {
                                centros.map(i => (

                                    <img key={i.id} src={i.img} alt="" />
                                ))
                            }

                        </div>
                        <button onClick={() => prevCentro()} className='z-40 absolute top-1/2 text-5xl left-0 text-white'>
                            <BsChevronLeft />
                        </button>

                        <button onClick={() => nextCentro()} className='z-40 absolute top-1/2 text-5xl right-0 text-white'>
                            <BsChevronRight />
                        </button>
                    </div>
                </div>
                <div className='flex py-10 w-full justify-center'>
                    <span data-aos="flip-down" className='h-4 border-y-4 border-white w-3/4'></span>
                </div>
                <div className='py-5 flex justify-between items-center font-bebas'>
                    <span data-aos="zoom-out-right" className='border-2 border-white w-full'></span>
                    <span className='text-3xl text-yellow-400  xl:text-6xl px-6'>OFERTA DEL MES!</span>
                    <span data-aos="zoom-out-left" className='border-2 border-white w-full'></span>
                </div>


                {/* CATÁLOGO */}
                <div data-aos="zoom-up"
                    className='m-2 flex justify-center text-center'>
                         {/*
                    <div style={{ transform: `translateX(-${xCatalogo}%)` }}
                        className={`flex transition duration-200 `}>

                        <div className='flex text-white text-2xl text-center relative items-center justify-center'>

                            {
                                // 
                                catalogo.map(({ id, imagen, nombre }) => (

                                    <div key={id} className='p-2 w-screen md:w-[50vw] 2xl:max- flex flex-col items-center max-w-[768px]'>

                                        <Link to={'/descripcion'} onClick={() => capturarId(id)} className='w-3/4 h-56 rounded-2xl  bg-gradient-to-b from-white to-futura-primary'>

                                            <div className='h-4/5 flex justify-center items-center p-5  '>
                                                <img className='w-4/5 lg:w-3/5 xl:h-full object-contain' src={imagen} alt="" />
                                            </div>

                                            <div className='h-1/5 flex justify-center items-center bg-white w-full rounded-b-2xl'>
                                                <p className='font-bold font-abel text-lg text-futura-primary2'>{nombre}</p>
                                            </div>


                                        </Link>

                                    </div>
                                ))
                            }

                        </div>

                    </div>
                     
                    <button onClick={() => prevCatalogo()}
                        className='absolute top-[50%] left-3 z-30 text-white text-3xl hover:opacity-50 active:scale-75 duration-200'>
                        <BiCaretLeftCircle />
                    </button>
                    <button onClick={() => nextCatalogo()}
                        className='absolute top-[50%] right-3 z-30 text-white text-3xl hover:opacity-50 active:scale-75 duration-200'>
                        <BiCaretRightCircle />
                    </button>
                    */}

                    <a data-aos="fade-down-right" href="https://www.facebook.com/photo?fbid=619883043457568&set=a.445283337584207" target='_blank'>
                        <img src="promoimg.jpg" alt="Futura digital" className='w-full h-full object-cover max-w-screen-lg
                            hover:scale-90 duration-200
                        ' />
                    </a>

                </div>


                {/* CONTACTO */}
                <div className='flex py-10 w-full justify-center'>
                    <span data-aos="flip-left" className='h-4 border-y-4 border-white w-3/4'></span>
                </div>
                <div className='py-5 flex justify-between items-center font-bebas'>
                    <span data-aos="flip-left" className='border-2 border-white w-full'></span>
                    <span className='text-white text-3xl xl:text-6xl px-6'>CONTACTO</span>
                    <span data-aos="flip-right" className='border-2 border-white w-full'></span>
                </div>
                {/* CORREO */}
                <div>
                    <div className='grid grid-cols-12 text-white font-bebas'>

                        <div className='col-span-12 px-14 md:col-span-5'>
                            <div>

                                <h3 data-aos="fade-down-right" className='text-xl'>ESCRÍBENOS</h3>

                                <form className='flex flex-col gap-3 py-6' onSubmit={sendEmail} ref={refForm} >
                                    <div className='flex flex-col'>
                                        <span data-aos="fade-down-right">Tu nombre</span>
                                        <input data-aos="fade-down-right" name='email_name' className='text-black opacity-50 rounded outline-none pl-2'
                                            type="text" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <span data-aos="fade-down-right">Tu correo</span>
                                        <input data-aos="fade-down-right" name='email' className='text-black opacity-50 rounded outline-none pl-2'
                                            type="text" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <span data-aos="fade-down-right">Mensaje</span>
                                        <textarea data-aos="fade-down-right" name='message' className='text-black h-24 opacity-50 rounded outline-none pl-2'
                                            type="area" />
                                    </div>
                                    <button className='w-full bg-futura-primary text-xl rounded'>
                                        ENVIAR
                                    </button>
                                </form>

                            </div>
                        </div>

                        <div className='col-span-12 md:col-span-5 flex justify-center items-center'>
                            <div className='p-10 flex justify-center items-center'>
                                <img className='lg:w-3/4' src="mapa.jpeg" alt="" />
                            </div>

                        </div>

                        <div className='col-span-12 md:col-span-2'>
                            <div className='flex md:flex-col justify-center lg:justify-around lg:h-full gap-6 text-5xl p-10'>
                                <a data-aos="fade-up"
                                    href='https://www.facebook.com/futuradigitaldelperu/?locale=es_LA' target="_blank" className='hover:opacity-50 hover:scale-90 hover:text-futura-primary duration-200'>
                                    < FaFacebookF />
                                </a>

                                <a data-aos="fade-up"
                                    href='https://www.instagram.com/futuradigitalprinters/' target="_blank" className='hover:opacity-50 hover:scale-90 duration-200 hover:text-futura-primary '>
                                    < BsInstagram />
                                </a>

                                <a data-aos="fade-up"
                                    href='https://wa.me/+51994099669' target="_blank" className='hover:opacity-50 hover:scale-90 duration-200 hover:text-futura-primary '>
                                    <FaWhatsapp />
                                </a>

                                <a data-aos="fade-up"
                                    href='https://www.tiktok.com/@futura_digital?_t=8bPSarkGx1R&_r=1' target="_blank" className='hover:opacity-50 hover:scale-90 duration-200 hover:text-futura-primary '>
                                    < FaTiktok />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

            </div >

        </div>
    )
}
