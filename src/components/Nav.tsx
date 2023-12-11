import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useMediaQuery } from '../util/useMediaQuery';
import avatar from '/public/images/avatar.jpg';

interface Props {
  imagePath: string;
  altText: string;
}

const Nav = () => {
    const [toggled, setToggled] = useState(false);
    const matches = useMediaQuery('(min-width: 1280px)');
    return (
        <div className='relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32'>
            <svg
                className='absolute bottom-0 left-1/2 -translate-x-1/2'
                width='250'
                height={4}
                viewBox='0 0 250 4'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M2 2L428 2'
                    strokeWidth={2}
                    stroke='#CCCCCC'
                    strokeLinecap='round'
                />
            </svg>
            <div>
                <img src={avatar.src} alt='Profile picture Nika' className="rounded-[40%]" />
            </div>

            <h1 className='text-lg font-bold'>
                <a href='/'>Nika's portfolio </a>
            </h1>

            {toggled && !matches && (
                <div className='fixed z-10 flex bg-gray-700 bottom-0 left-0 w-full h-screen items-center justify-center'>
                    <nav className='flex flex-col gap-24'>
                        <a href='/'>Projects</a>
                        <a href='/education'>Education & skills</a>
                        <a href='/contact'>Contact information</a>
                    </nav>
                </div>
            )}

            {!matches && (
                <div
                    onClick={() => setToggled((prevToggle) => !prevToggle)}
                    className='space-y-2 cursor-pointer relative z-20'
                >
                    <span className='block h-0.5 w-8 bg-zinc-100'></span>
                    <span className='block h-0.5 w-6 bg-zinc-100'></span>
                    <span className='block h-0.5 w-4 bg-zinc-100'></span>
                </div>
            )}
        </div>
    );
};

export default Nav;
