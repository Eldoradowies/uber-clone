import React from "react";
import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1Ijoid2llc21hbiIsImEiOiJjbGJnOG4xZTAwMmFjM29ubWV4bXNkb3kzIn0.nwWk6cEUhnSjz-jFERk6Lg";

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [10.5015, 7.4408],
      zoom: 3,
    });

    if (props.pickUpCoordinates) {
      addToMap(map, props.pickUpCoordinates);
    }

    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates);
    }

    if (props.pickUpCoordinates && props.dropoffCoordinates) {
      map.fitBounds([props.pickUpCoordinates, props.dropoffCoordinates], {
        padding: 60,
      });
    }
  }, [props.pickUpCoordinates, props.dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1 h-1/2
`;
