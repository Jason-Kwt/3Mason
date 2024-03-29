'use client';
import React from 'react';

export default function Partner({ name, intro, title }) {
  return (
    <div className="w-[300px] h-[200px]">
      <div className="bg-gray-600 w-full h-full rounded-xl"></div>
      <div className="p-2">
        <h4 className="font-semibold text-xl font-syncopate uppercase">
          {name}
        </h4>
        <h4 className="font-semibold text-xl font-syncopate uppercase">
          {title}
        </h4>
        <p className="font-thin text-sm font-raleway text-justify mt-4">
          {intro}
        </p>
      </div>
    </div>
  );
}
