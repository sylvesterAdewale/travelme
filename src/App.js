import Header from "./components/Header";
import List from "./components/List";
import Map from "./components/Map";
import { getPlacesData } from './api'
import { useEffect, useState } from "react";

function App() {

  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({});
  const [clickedPlace, setClickedPlace] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [type, setType] = useState('restaurants')
  const {rating, setRating} = useState('')
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(( { coords: {latitude, longitude} }) => {
      setCoordinates({ lat: latitude, lng: longitude});
    })
  }, []);

  useEffect(() => {
    setLoading(true)
    console.log(coordinates, bounds);

    getPlacesData(type, bounds.sw, bounds.ne)
      .then((data) => {
        setPlaces(data)
        setLoading(false)
      })
  }, [type, coordinates, bounds]);

  return (
    <div className="App px-2 lg:px-10 py-4 mx-auto max-h-screen overflow-hidden">
      <div className="grid grid-cols-3 gap-3">
        <Header setType={setType} rating={rating} setRating={setRating} />
        <List places={places} clickedPlace={clickedPlace} isLoading={isLoading} />
        <Map 
          coordinates={coordinates} 
          setCoordinates={setCoordinates} 
          setBounds={setBounds} 
          places={places}
          setClickedPlace={setClickedPlace}
        />
      </div>
    </div>
  );
}

export default App;
