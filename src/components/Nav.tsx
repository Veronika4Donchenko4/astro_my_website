import avatar from '../assets/images/avatar.jpg';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useMediaQuery } from '../util/useMediaQuery';
import avatar from '/public/images/avatar.jpg';

interface Props {
  imagePath: string;
  altText: string;
}

const Nav = () => {
            <div>
                <img src={avatar.src} alt='Profile picture Nika' />
            </div>

      <h1 className="text-lg font-bold">
        <a href="/">Nika</a>
      </h1>

      {toggled && !matches && (
        <div className="fixed flex bg-gray-700 bottom-0 left-0 w-full h-screen items-center justify-center">
          <div className="flex flex-col gap-24">
            <a href="/">Projects</a>
            <a href="/education">Education & skills</a>
            <a href="/contact">Contact information</a>
          </div>
        </div>
      )}

      {!matches && (
        <div
          onClick={() => setToggled((prevToggle) => !prevToggle)}
          className="space-y-2 cursor-pointer  z-50"
        >
          <span className="block h-0.5 w-8 bg-zinc-100"></span>
          <span className="block h-0.5 w-6 bg-zinc-100"></span>
          <span className="block h-0.5 w-4 bg-zinc-100"></span>
        </div>
      )}
    </nav>
  );
};

export default Nav;
