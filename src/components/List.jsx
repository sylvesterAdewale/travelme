import React from 'react'
import ListDetails from './ListDetails'

const List = ({places, clickedPlace}) => {
  return (
    <div className='lg:col-span-1 col-span-full h-[65vh] overflow-y-scroll'>
        {places?.map((place, i) => (
            <ListDetails key={i} place={place} />
        ))}
    </div>
  )
}

export default List