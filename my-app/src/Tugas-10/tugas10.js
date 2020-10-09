import React from 'react';

class Namabuah extends React.Component{
    render(){
        return(
            <>
            
            {this.props.nama}
            {this.props.harga}
            {this.props.berat}

            </>
        )
    }
}


let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]


class Tampil extends React.Component{
    render(){
        return(
        <>
        <div style={{margin: '10px auto', border: '1px solid black', borderRadius: '10px', width: '40%', padding: '20px', backgroundColor: '#FFF'}}>
                <h1 style={{textAlign: 'center'}}>Tabel Harga Buah</h1>
                <table border="1" style={{width: '100%'}}>
                    <tr>
                        <th style={{width: '40%', backgroundColor: 'grey'}}>Nama</th>
                        <th style={{width: '40%', backgroundColor: 'grey'}}>Harga</th>
                        <th style={{width: '30%', backgroundColor: 'grey'}}>Berat</th>
                    </tr>
        {dataHargaBuah.map(el => {
            return (
                <tr style={{textAlign:"center"}}>
                    <td style={{border: "1px solid black", backgroundColor:"tomato", color:"white"}}><Namabuah nama={el.nama}/></td>
                    <td style={{border: "1px solid black", backgroundColor:"tomato", color:"white"}}><Namabuah harga={el.harga}/></td>
                    <td style={{border: "1px solid black", backgroundColor:"tomato", color:"white"}}><Namabuah berat={el.berat/1000}/> kg</td>
                </tr>
            );
        })}
        </table>
    </div>
</>

        )
    }
}

export default Tampil