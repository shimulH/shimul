import React from 'react';
import { exo_2 } from './fonts';

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className={`${exo_2.className}  text-5xl  capitalize mb-8`}>
      {children}
    </h2>
  );
}
