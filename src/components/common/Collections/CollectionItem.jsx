import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CollectionItem() {
  return (
    <div className="mx-[15px]">
      <Link href="" className="group relative">
        <div className="relative z-10 grid grid-cols-2 border border-white p-9">
          <Image
            src="/assets/images/collection.jpg"
            width={219}
            height={219}
            alt=""
            className="w-full"
          />
          <Image
            src="/assets/images/collection.jpg"
            width={219}
            height={219}
            alt=""
            className="w-full"
          />
          <Image
            src="/assets/images/collection.jpg"
            width={219}
            height={219}
            alt=""
            className="w-full"
          />
          <Image
            src="/assets/images/collection.jpg"
            width={219}
            height={219}
            alt=""
            className="w-full"
          />
          <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full p-2">
            <div className="absolute top-0 left-0 z-10 h-full w-full bg-black opacity-50 " />
            <div className="absolute top-0 left-0 z-20 h-full w-full rounded-full border-[8px] border-white opacity-50  " />
            <Image src="/assets/images/nft.png" width={150} height={150} alt="" />
            <h3 className="absolute top-1/2 left-1/2 z-30 w-full -translate-x-1/2 -translate-y-1/2 text-center text-[18px] font-bold capitalize">
              Puke 2 Earn
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
}
