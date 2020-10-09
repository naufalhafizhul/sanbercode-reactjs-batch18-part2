import React from 'react';

class Form extends React.Component{
    render(){
        return(
            <>
              <div className="App" style={{justifyContent:'center', marginLeft:'470px'}}>
                 <form style = {{border:"5px solid black",borderRadius:"20px", width:"42%", padding:"20px"}}>
                   <h2 style={{width:"200px",display:"inline", marginLeft:"70px"}}>Form Pembelian Buah</h2>
                      <br/>
                      <br/>
                        <content style = {{display:"inline", marginLeft:"30px"}}>
                            <label for="nama"><b>Nama Pelanggan</b></label>
                            <input style = {{display:"inline",marginLeft:"30px"}}type = "name" name="nama"/>
                            <br/>
                            <br/>
                        </content>
                      <div style = {{display:"flex", marginLeft:"30px"}}>
                        <label for = "Daftar" style ={{}}><b>Daftar Item</b></label>
                          <div style = {{display:"flex", flexDirection:"column",marginLeft:"70px"}}>
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
              
                   <button type="submit" style={{borderRadius:"90px", width:"50px", display:"inline", marginLeft:"30px"}}>Kirim</button>
              
                </form>
            </div>
         </>
        )
    }
}


  export default Form;