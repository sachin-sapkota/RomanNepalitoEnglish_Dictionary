import Image from 'next/image';
import React from 'react';

const SearchContainer = () => {
  return (
    <div className="flex flex-col w-[500px] justify-between items-center bg-black h-[700px] mt-5 ">
      <Image src={'/images/logo.png'} width={200} height={200} />
      hello
    </div>
  );
};

export default SearchContainer;
