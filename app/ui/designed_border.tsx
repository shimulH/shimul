import React from 'react';
import { exo_2 } from './fonts';

type DesignedBorderProps = {
  children: React.ReactNode;
};

export default function DesignedBorder({ children }: DesignedBorderProps) {
  return (
    <div
      className={`rounded-xl border-2 border-indigo-500 text-white px-4 py-1`}
    >
      {children}
    </div>
  );
}
