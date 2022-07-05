import React, { useState } from 'react';
// import { Autocomplete } from '@react-google-maps/api';

const Header = ({ setType}) => {
  const {rating, setRating} = useState('')
  return (
    <div className='col-span-full row-span-1'>
        <h1 className='font-heading text-2xl md:text-4xl font-bold text-teal-900'>travel.me</h1>
        <div className='bg-amber-600 stroke relative bg-opacity-20 p-5 my-3 flex flex-col gap-3 items-start'>
          {/* <div className='stoke bg-teal-900'></div> */}
          <div className='flex gap-3 z-20 items-center font-content font-medium'>
            <button className='px-3 py-2 md:px-5 md:py-3 bg-white' onClick={() => setType('restaurants')}>Resturants</button>
            <button className='px-3 py-2 md:px-5 md:py-3 bg-white' onClick={() => setType('hotels')}>Hotels</button>
            <button className='px-3 py-2 md:px-5 md:py-3 bg-white' onClick={() => setType('attractions')}>Attractions</button>
            <select name="Rating" value={rating} onChange={e => setRating(e.target.value)} id="rating" className='px-3 outline-none py-2 md:px-5 md:py-3'>
              <optgroup>
                <option value={0}>Rating</option>
                <option value={4.5}>Above 4.5</option>
                <option value={4}>Above 4.0</option>
                <option value={3}>Above 3.0</option>
              </optgroup>
            </select>
          </div>
          {/* <Autocomplete> */}
            <div className='text-gray-800 z-10 p-3 bg-white flex items-center justify-between w-3/4 xl:w-2/4'>
              <input type="search" name="" id="" className='outline-none placeholder:text-gray-500 placeholder:font-content text-sm w-3/4 py-2' placeholder='Where to?' />
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          {/* </Autocomplete> */}
        </div>
    </div>
  )
}

export default Header