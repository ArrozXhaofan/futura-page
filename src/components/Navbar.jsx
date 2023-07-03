import React, { useState } from 'react'
import {BiHomeAlt2} from 'react-icons/bi'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [menuClass, setMenuClass] = useState(
        'scale-100 transition duration-100 ease-in-out')

    const [menuClass2, setMenuState2] = useState('-translate-y-[120%]')

    const [menuState, setMenuState] = useState(true)


    const apa = () => {
        setMenuClass('scale-0 transition duration-400 ease-in-out');
        setTimeout(() => {
            setMenuClass('scale-100 transition duration-400 ease-in-out');
        }, 100);
    }
    const cambiarMenu = () => {
        setMenuState(!menuState)
        if (menuClass === '') {
            setMenuClass('hidden')
        }
        apa()

        if (menuState === false)
            setMenuState2('-translate-y-[120%] h-auto')
        else if (menuState === true)
            setMenuState2('-translate-y-[0%]  h-auto')

    }

    return (
        <div className='w-full'>

            <nav className='w-full h-14 md:h-10 relative bg-futura-nav flex items-center justify-between 2xl:justify-evenly pl-2 pr-5 shadow-2xl'>

                <div>
                    <img className='w-20'
                        src="futuraLogo.png" alt="" />
                </div>

                <div>
                    <img className='w-20'
                        src="evolutionLogo.png" alt="" />
                </div>


                <div className=' text-futura-primary2 hover:scale-75 duration-300'>
                    <Link to={'/'}>
                    <BiHomeAlt2/>
                    </Link>
                </div>


            </nav>


        </div>
    )
}
