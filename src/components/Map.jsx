import GoogleMapReact from 'google-map-react';
 
const Map = ({ setCoordinates, coordinates, setBounds, places, setClickedPlace }) => {
    
    
  return (
    <div className='lg:col-span-2 col-span-full'>
        <div className='h-[65vh]'>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyCzcY82WkCgRsN9m-5g9Z1xHxh7xwB2ObI'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={ e => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({
                        sw: e.marginBounds.sw,
                        ne: e.marginBounds.ne,
                    })
                }}
                onChildClick={(e) => {setClickedPlace(e)}}
            >
                {places?.map((place, i) => (
                    <div
                        lat={Number(place?.latitude)}
                        lng={Number(place?.longitude)}
                        key={i}
                        className="text-teal-900"
                    >
                        <a href={"#" + place.location_id}>
                            <p>{place?.name}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    </div>
  )
}

export default Map