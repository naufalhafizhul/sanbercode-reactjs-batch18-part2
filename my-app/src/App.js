import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form style = {{border:"3px solid black",borderRadius:"20px", width:"350px"}}>
        <h2 style={{width:"200px",display:"inline", marginLeft:"60px"}}>Form Pembelian Buah</h2>
        <br/>
        <br/>
          <content style = {{display:"inline", }}>
              <label for="nama"><b>Nama Pelanggan</b></label>
              <input style = {{display:"inline",marginLeft:"30px"}}type = "name" name="nama"/>
              <br/>
              <br/>
          </content>
        <div style = {{display:"flex"}}>
          <label for = "Daftar" style ={{}}><b>Daftar Item</b></label>
            <div style = {{display:"flex", flexDirection:"column",marginLeft:"60px"}}>
              <div style={{display:"flex"}}>
                <input type ="checkbox" name ="semangka"></input>
                <label for = "semangka">Semangka</label>
              </div>
              <div style={{display:"flex"}}>
                <input type ="checkbox" name ="jeruk"></input>
                <label for = "jeruk">Jeruk</label>
              </div>
              <div style={{display:"flex"}}>
                <input type ="checkbox" name ="nanas"></input>
                <label for = "nanas">Nanas</label>
              </div>
              <div style={{display:"flex"}}>
                <input type ="checkbox" name ="salak"></input>
                <label for = "salak">Salak</label>
              </div>
              <div style={{display:"flex"}}>
                <input type ="checkbox" name ="anggur"></input>
                <label for = "anggur">Anggur</label>
              </div>
            </div>
        </div>

          <button type="submit" style={{borderRadius:"90px", width:"50px", display:"inline"}}>Kirim</button>

      </form>
    </div>
  );
}

export default App;
