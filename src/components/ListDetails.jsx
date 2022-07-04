import React from 'react';
import Rating from "@material-ui/lab/Rating";

const ListDetails = ({place}) => {
  return (
    <div className='font-content max-w-full p-2 my-3 border rounded md:mr-3' id={place?.location_id}>
        <img src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt={place.name} className="md:w-[400]" />
        <div className='flex justify-between py-1'>
            <h6 className='capitalize text-lg font-medium'>{place.name}</h6>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        </div>
        <address className='text-sm font-extralightt'>{place.address}</address>
        <div>
          <Rating value={Number(place?.rating)} readOnly/>
          <p>{place?.num_reviews} Reviews</p>
        </div>
        <div className="my-2">
          {place?.cuisine?.map(({ name }) => (
            <span className="bg-gray-200 text-amber-900 py-1 px-2 my-1 mr-2 inline-block text-[10px]" key={name}>{name}</span>
          ))}
        </div>
        <div className='flex gap-3 mt-3 text-sm text-gray-500 justify-between'>
          <a href={place?.web_url}>Trip Advisor</a>
          <a href={place?.website}>Website</a>
          <a href={"tel:" + place?.phone}className="flex flex-grow justify-end">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          </a>
        </div>
    </div>
  )
}

export default ListDetails