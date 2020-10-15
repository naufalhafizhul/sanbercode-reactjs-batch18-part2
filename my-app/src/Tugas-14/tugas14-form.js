import React, { useContext, useState } from "react";
import { defaultInput, FruitsContext } from "./tugas14-context";
import Axios from "axios";

export default function FruitsForm() {
    const { fruitsContext, inputContext } = useContext(FruitsContext);
    const [fruits, setFruits] = fruitsContext;
    const [input, setInput] = inputContext;

    const handleChange = (event) =>{
        let typeOfInput = event.target.name
    
        switch (typeOfInput){
          case "name":
          {
            setInput({...input, name: event.target.value});
            break
          }
          case "price":
          {
            setInput({...input, price: event.target.value});
            break
          }
          case "weight":
          {
            setInput({...input, weight: event.target.value});
              break
          }
        default:
          {break;}
        }
      }

    const handleSubmit = (event) =>{
        event.preventDefault()
    
        let name = input.name
        let price = input.price.toString()
        
    
        if (input.id === null){        
          axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name, price, weight: input.weight})
          .then(res => {
              setFruits(null)
              setInput(defaultInput)
              alert(`${res.data.name} Telah ditambahkan`)
          })
        }else{
          axios.put(`http://backendexample.sanbercloud.com/api/fruits/${input.id}`, {name, price, weight: input.weight})
          .then((res) => {
            setFruits(null)
            setInput(defaultInput)
            alert(`${res.data.name} Telah ditambahkan`)
          })
        }
        setInput({name: "", price: "", weight: 0, id: null})
    
      }

      return(
          <>
            <div style={{width: "50%", margin: "0 auto", display: "block"}}>
            <div style={{border: "1px solid #aaa", padding: "20px"}}>
                <form onSubmit={handleSubmit}>
                <label style={{float: "left"}}>
                    Nama:
                </label>
                <input style={{float: "right"}} type="text" required name="name" value={input.name} onChange={handleChange}/>
                <br/>
                <br/>
                <label style={{float: "left"}}>
                    Harga:
                </label>
                <input style={{float: "right"}} type="text" required name="price" value={input.price} onChange={handleChange}/>
                <br/>
                <br/>
                <label style={{float: "left"}}>
                    Berat (gram):
                </label>
                <input style={{float: "right"}} type="number" required name="weight" value={input.weight} onChange={handleChange}/>
                <br/>
                <br/>
                <div style={{width: "100%", paddingBottom: "20px"}}>
                    <button style={{ float: "right"}}>submit</button>
                </div>
                </form>
            </div>
            </div>
          </>
      )
}