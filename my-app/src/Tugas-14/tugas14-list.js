import React, { useContext } from "react";
import { FruitsContext } from "./tugas14-context";
import Axios from "axios";

export default function FruitsList() {
    const { fruitsContext, inputContext } = useContext(FruitsContext);
    const [fruits, setFruits] = fruitsContext;
    const [input, setInput] = inputContext;

    const handleDelete = (event) => {
        let idDataBuah = parseInt(event.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
        .then(() => {
          setFruits(null)
        })
              
        
      }
      
      const handleEdit = (event) =>{
        let idDataBuah = parseInt(event.target.value)
        axios.get(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
        .then(res => {
          let dataBuah = res.data
          setInput({name: dataBuah.name, price: dataBuah.price, weight: dataBuah.weight, id: idDataBuah})
        })
      }

      return(
          <>
          <h1>Daftar Harga Buah</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>

            {
              daftarBuah !== null && daftarBuah.map((el, index)=>{
                return(                    
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{el.name}</td>
                    <td>{item.price}</td>
                    <td>{item.weight/1000} Kg</td>
                    <td>
                      <button onClick={handleEdit} value={el.id}>Edit</button>
                      &nbsp;
                      <button onClick={handleDelete} value={el.id}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>
          </>
      )
}
