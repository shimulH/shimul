'use client';

import React from 'react';
import SectionHeading from '@/app/ui/section_heading';
import { exo_2 } from './fonts';
import DesignedBorder from './designed_border';

export default function Contact() {
  return (
    <DesignedBorder>
      <section id='contact' className='max-w-xl'>
        <SectionHeading>Contact me</SectionHeading>

        <p className={`text-gray-700 -mt-6 dark:text-white/80 `}>
          Please contact me directly at{' '}
          <a
            className={`${exo_2.className}  text-5xl underline' href='mailto:example@gmail.com`}
          >
            shimul.hsn@outlook.com
          </a>{' '}
        </p>
      </section>
    </DesignedBorder>
  );
}
