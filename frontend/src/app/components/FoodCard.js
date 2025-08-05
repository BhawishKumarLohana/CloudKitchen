import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function FoodCard({name,address,city,description,rating,link}) {

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-md bg-white">
         {/* Image */}
        <Image
        unoptimized
        src={""+link}
        alt='image'
        width={400}
        height={400}
        />
       
      

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600">
          {address}
        </p>
        <p className="text-sm text-gray-600">
          {city}
        </p>
        <p className="text-sm text-gray-600">
          {description}
        </p>
        

        {/* Order Button */}
        <Link href={link}>
        <button className="mt-2 rounded bg-gray-600 px-4 py-2 text-white" >
            
          Order
          
        </button>
        </Link>
      </div>
    </div>
  );
}

export default FoodCard;
