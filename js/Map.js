import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer, Leaflet } from 'react-leaflet'

/* define boundaries of map -- these are just starter values, can be replaced based on where we want our map to be 
  these are optional, map does not need boundaries
  additionally, all values listed in state can also be changed
*/
const corner1 = Leaflet.latLng(64.11419975101958, -177.09960937500003)
const corner2 = Leaflet.latLng(13.042689780383594, -49.6142578125)
const bounds = Leaflet.latLngBounds(corner1, corner2) 

class Map extends Component { 
  constructor() {
    super()
    this.state = {
      center: [36.8, -98],
      zoom: 3.5, 
      latitude: 0.00,
      longitude: 0.00,
      bounds
    }
  }

  render() {
    const { center, zoom, latitude, longitude, bounds } = this.state
    return (
      <div>
        <Map 
          style={{height: "100vh", width: "100%"}}
          center={center}
          zoom={zoom}
          maxBounds={bounds}
        >
          <TileLayer  
              url="https://api.mapbox.com/styles/v1/ademsas/cjggt8ilb002k2rqw269apfqt/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWRlbXNhcyIsImEiOiJjamdncThncmIwMGw4MnhxbWNybnV1cDMwIn0.DmUIWxfIPjHyD-nu9GVqrw"
            /> 
        </Map>
      </div>  
    )
  }
}