import { useState, useEffect, createRef} from 'react'
import ListDetails from './ListDetails'

const List = ({places, clickedPlace, isLoading}) => {
  const [elRef, setElRef] = useState([])
  
  useEffect(() => {
    const refs = Array(places?.length).fill().map((_, i) => elRef[i] || createRef());
    
    setElRef(refs);

  }, [places])

  return (
    <div className='lg:col-span-1 col-span-full h-[65vh] overflow-y-scroll'>
      {isLoading ? (
        <div>Loading</div>
      ): places?.map((place, i) => (
            <ListDetails refProp={elRef[i]} key={i} place={place} selected={Number(clickedPlace) === i} />
        ))}
    </div>
  )
}

export default List