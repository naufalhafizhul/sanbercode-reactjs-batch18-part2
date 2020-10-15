import React, { useState, createContext, useEffect } from "react";

export const FruitsContext = createContext();

export const defaultInput = {
    id: null,
    name: "",
    price: "",
    weight: 0,
};

export const FruitsProvider = (props) => {
    const [daftarBuah, setDaftarBuah] =  useState(null)
    const [input, setInput]  =  useState(defaultInput)

    useEffect( () => {
        if (daftarBuah === null){
          axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
          .then(res => {
            setDaftarBuah(res.data.map(el=>{ return {id: el.id, name: el.name, price: el.price, weight: el.weight }} ))
          })
        }
      }, [daftarBuah])

      return (
        <FruitsContext.Provider
            value={{
                fruitsContext: [daftarBuah, setDaftarBuah],
                inputContext: [input, setInput],
            }}
        >
            {props.children}
        </FruitsContext.Provider>
    );

}