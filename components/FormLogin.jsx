import React from 'react'
import { CiUser } from 'react-icons/ci'
import { RiLockPasswordLine } from 'react-icons/ri'
import { FcGoogle } from 'react-icons/fc'
import { AiFillApple, AiFillGithub } from 'react-icons/ai'
const FormLogin = () => {

    const onSubmitLogin=(e)=>{
        e.preventDefault()
        console.log(e)
    }
    return (
        <div className='mx-auto max-w-7xl px-5  min-h-screen h-screen  py-32 '>
            <div className='flex rounded-md overflow-hidden h-full '>
                <div className='flex-1 hidden lg:block '>
                    <img className='w-full h-full object-cover' src='/assets/laptopcart.jpg' />

                </div>
                <div className='flex-1 p-10 bg-white'>
                    <form className='text-center flex flex-col justify-center items-center h-full' onSubmit={onSubmitLogin}>
                        <div className='space-y-1'>

                            <h2 className='text-4xl text-gray-800 font-medium'>Hello! Welcome back </h2>
                            <p
                                className=' w-96 mx-auto text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis accusamus perspiciatis, corpoa.</p>
                        </div>

                        <div className='space-y-4 my-5 w-96 mx-auto'>
                            <div className=' relative group'>
                                <input placeholder='username '
                                    className='inputLogin' />
                                <CiUser size={20} className='absolute top-2.5 left-1.5 text-gray-400 group-focus-within:text-blue-400  ' />
                            </div>
                            <div className=' relative group'>
                                <input placeholder='Password ' type={'password'}
                                    className='inputLogin' />
                                <RiLockPasswordLine size={20} className='absolute top-2.5 left-1.5 text-gray-400 group-focus-within:text-blue-400  ' />
                            </div>

                            <a href='#' className='text-xs text-sky-700 w-fit ml-auto  block'>Do you forget your password?</a>
                        </div>
                        <div className='flex flex-col gap-y-4'>
                            <button type={'submit'} className='bg-sky-600 text-white w-96 py-2 uppercase text-sm font-bold rounded-md'>
                                Login</button>
                            <div className='flex  w-full items-center space-x-3 text-gray-400'>

                                <div className='h-[1px] flex-1 bg-gray-300' />
                                <span className='block text-xs'>Or</span>
                                <div className='h-[1px] flex-1 bg-gray-300' />
                            </div>
                            <div className='flex justify-center items-center gap-x-3'>
                                <button className='btnLoginSocial'><FcGoogle size={20} /></button>
                                <button className='btnLoginSocial'> <AiFillApple size={20} /></button>
                                <button className='btnLoginSocial'> <AiFillGithub size={20} /></button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default FormLogin