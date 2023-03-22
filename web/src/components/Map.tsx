import { GoogleMap, InfoBox, MarkerF, OverlayView, useJsApiLoader } from '@react-google-maps/api';





export function Map(){
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAkiqCMbJ6hO9lka4SxpdrWE5h_MilCLdI"
  })

  const positionPing = {
    lat: -23.419982209169735,
    lng: -51.936631002975595
    
  }

  const options = { closeBoxURL: '', enableEventPropagation: true };


  return(
    <div className="w-full h-80 flex justify-center items-center rounded-lg">
      {
        isLoaded ? (
          <GoogleMap
            mapContainerStyle={{width:"100%", height:'100%'}}
            center={positionPing}
            zoom={17}
          >
            <MarkerF position={positionPing} label={"HD"} title='HD Informatica'  />
            <InfoBox
              options={options}
              position ={positionPing}
            >
              <div className='bg-slate-400 opacity-75 p-1 rounded-2xl'>
                <div className='text-base text-[#08233b]' >
                  Loja Informatica
                </div>
              </div>
            </InfoBox>
          </GoogleMap>
        ) : <>Loading...</>
      }
      
    </div>
  )
}


