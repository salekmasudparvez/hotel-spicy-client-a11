import { Map, Marker } from "pigeon-maps"
const MapShow = () => {

  return(
      <Map height={300} defaultCenter={[21.427909, 91.972350]} defaultZoom={11}>
        <Marker width={50} anchor={[21.427909, 91.972350]} />
      </Map>

  )
}

export default MapShow;