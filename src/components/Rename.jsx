import React, {useState, useEffect} from "react";

export default function ImageModal(){
    const [car, setCar] = useState({
      brand: "Ford",
      model: "Mustang",
      year: "1964",
      color: "red"
    });
  
    const updateColor = () => {
      setCar(previousState => {
        return { ...previousState, color: "blue", year: "1969" }
      });
    }
  
    return (
      <>
        <p>
          It is a {car.color} {car.model} from {car.year}.
        </p>
        <button
          type="button"
          onClick={updateColor}
        >Blue</button>
      </>
    )
}