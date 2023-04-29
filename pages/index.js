import SearchContainer from '@/src/components/SearchContainer';
import React from 'react';
import Image from 'next/image';

const index = () => {
  return (
    <main className="flex items-center justify-center w-full h-full ">
      <div className=" shadow-2xl bg-gray-300  w-[80%]  mt-[100px] flex flex-col h-screen p-3">
        <div className="flex flex-col w-full justify-between items-center bg-blue-700  h-[700px] mt-5 ">
          <Image src={'/images/logo.png'} width={200} height={200} />
          hello
        </div>
      </div>
    </main>
  );
};

export default index;
