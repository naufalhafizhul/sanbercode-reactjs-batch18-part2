import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';

function Tugas13(props){
        
    const Buah = [
                {nama: "Semangka", harga: 10000, berat: 1000},
                {nama: "Anggur", harga: 40000, berat: 500},
                {nama: "Strawberry", harga: 30000, berat: 400},
                {nama: "Jeruk", harga: 30000, berat: 1000},
                {nama: "Mangga", harga: 30000, berat: 500}
            ]
        const [buah, setBuah] = useState(Buah);
        const [form, setForm] = useState(-1);
        
        const DeleteData = (ev) =>{
            axios.delete (`http://backendexample.sanbercloud.com/api/fruits/${ev.target.value}`)
            .then (res =>{
                console.log(res);
                console.log(res.data);
            })
        }
        const EditData = (ev) => {
            console.log(ev.target.value);
            setForm(ev.target.value)
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {buah})
            .then(res=>{
                setBuah(res.data)
                console.log(res.data);
            })
        }
        useEffect( () => {
            Buah(props.buah)
          }, [])
            console.log(props)
          

        return (
            <>
                <h2>Tabel Harga Buah</h2>
                <table>
                    <thead>
                        <tr style={{backgroundColor:"gray"}}>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Berat</th>
                            <th>Aksi</th>
                        </tr>    
                    </thead>
                    <tbody>

                    {this.state.buah.map( (val, index) =>{
                        return  <tr key={index} style={{textAlign:"center", border:"2px solid black", backgroundColor:""}}>
                                    <td>{val.nama}</td>
                                    <td>{val.harga}</td>
                                    <td>{val.berat/1000}</td>
                                    <td><button value={index} onClick={(ev)=>EditData(ev)}>Edit</button> | <button value={index} onClick={(ev)=>DeleteData(ev)} style={{backgroundColor:"red", color:"white"}}>Delete</button></td>
                                </tr>                        
                    })}
                    </tbody>
                </table>

                <div id="form">
                    <form method="post" onSubmit={this.HandleSubmit}>
                    <h2>Form Tambah Buah</h2>
                    <div className="form-group">
                        <label htmlFor="#name">Nama Buah</label>
                        <div className="input-wrap">
                        <input type="text" id="name" name="name" value={this.state.inputName} onChange={this.HandleChangeName} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="#price">Harga</label>
                        <div className="input-wrap">
                        <input type="text" id="price" name="price" value={this.state.inputPrice} onChange={this.HandleChangePrice} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="#weight">Berat (gram)</label>
                        <div className="input-wrap">
                        <input type="text" id="weight" name="weight" value={this.state.inputWeight} onChange={this.HandleChangeWeight} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-wrap">
                        <input type="submit" value="Submit" />
                        </div>
                    </div>
                    </form>
                 </div>
            </>
        )
}

Tugas13.getInitialProps = async function(){
    const res = await fetch("http://backendexample.sanbercloud.com/api/fruits");
    const table = await res.json();
    return{
        buah : table 
    }
  

export default Tugas13
