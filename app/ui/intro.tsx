'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { exo_2 } from './fonts';
import DesignedBorder from './designed_border';

export default function Intro() {
  return (
    <section className='mb-28 max-w-[40rem] sm:mb-0 '>
      <div className=' rounded-xl p-4 border-2 border-indigo-500'>
        <div className='flex '>
          <div className='relative '>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'tween', duration: 0.2 }}
            >
              <Image
                alt='portrait Shimul'
                width='192'
                height='192'
                quality='95'
                priority={true}
                src='/shimul2.png'
                className=' h-28 w-28 object-cover rounded-full border-[0.34rem] border-gray-200 shadow-sm bg-blend-overlay'
              />
            </motion.div>
          </div>
        </div>
        <div className='mb-10 mt-4 text-2xl font-medium !leading-[1.1] sm:text-2xl'>
          <p>Hello, my name is</p>
          <h2 className={`${exo_2.className}  text-5xl leading-[4rem]`}>
            Shimul Hassan
          </h2>{' '}
          <h1>
            I am a <span className='font-bold'>Frontend Developer</span> with{' '}
            <span className='font-bold'>5 years</span> of experience.
          </h1>
        </div>
      </div>
      <div className='flex flex-col sm:justify-between sm:flex-row text-lg gap-1 font-medium mt-2'>
        <DesignedBorder>
          <Link
            href='#contact'
            className='group px-5  flex items-center gap-2  outline-none  hover:bg-slate-950  transition'
          >
            Contact me{' '}
            <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
          </Link>
        </DesignedBorder>
        <DesignedBorder>
          <a
            className='group px-5 flex items-center gap-2 rounded-lg outline-none  cursor-pointer transition'
            href='/Shimul_Resume.pdf'
            download
          >
            Resume{' '}
            <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
          </a>
        </DesignedBorder>
        <DesignedBorder>
          <a className='px-5 text-gray-700 flex items-center cursor-pointer rounded-lg text-2xl'>
            <BsLinkedin />
          </a>
        </DesignedBorder>

        <DesignedBorder>
          <a className='px-5 text-gray-700 flex items-center gap-2 cursor-pointer rounded-lg text-2xl'>
            <FaGithubSquare />
          </a>
        </DesignedBorder>
      </div>
    </section>
  );
}
