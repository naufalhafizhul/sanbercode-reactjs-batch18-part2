import React, {Component} from 'react';

class TabelBuah extends Component{
    constructor(props){
        super(props)
        this.state={
            index: -1,
            inputName:"",
            inputPrice:"",
            inputWeight:"",
            buah: [
                {nama: "Semangka", harga: 10000, berat: 1000},
                {nama: "Anggur", harga: 40000, berat: 500},
                {nama: "Strawberry", harga: 30000, berat: 400},
                {nama: "Jeruk", harga: 30000, berat: 1000},
                {nama: "Mangga", harga: 30000, berat: 500}
            ]
        }
        this.HandleChangeName  = this.HandleChangeName.bind(this)
        this.HandleChangePrice = this.HandleChangePrice.bind(this)
        this.HandleChangeWeight = this.HandleChangeWeight.bind(this)
        this.HandleSubmit = this.HandleSubmit.bind(this)
        this.HandleEdit = this.HandleEdit.bind(this)
        this.HandleRemove = this.HandleRemove.bind(this)
    }

    HandleChangeName(event){
        this.setState({
            inputName: event.target.value
        })
    }

    HandleChangePrice(event){
        this.setState({
            inputPrice: event.target.value
        })
    }

    HandleChangeWeight(event){
        this.setState({
            inputWeight: event.target.value
        })
    }

    HandleSubmit(event){

        let index = this.state.index
        let name = this.state.inputName;
        let price = this.state.inputPrice;
        let weight = this.state.inputWeight;

        if(index === -1){
            this.setState({
                buah: [...this.state.buah, {name, price, weight}],
                inputName: "",
                inputPrice: "",
                inputWeight: "",
                index: -1,
            })
        }
        else{
            let buah = this.state.buah
            buah[index].nama = this.state.inputName
            buah[index].harga = this.state.inputPrice
            buah[index].berat = this.state.inputWeight

            this.setState({
                buah: buah,
                inputName: "",
                inputPrice: "",
                inputWeight: "",
                index: -1,
            })
        }
        event.preventDefault()
    }

    HandleEdit(event){
        
        let index = event.target.value
        let inputName = this.state.buah[index].nama
        let inputPrice = this.state.buah[index].harga
        let inputWeight = this.state.buah[index].berat
        this.setState({
            index: index,
            inputName: inputName,
            inputPrice: inputPrice,
            inputWeight: inputWeight,
        })
    }

    HandleRemove(event){
        let index = event.target.value
        this.state.buah.splice(index, 1);
        this.setState({
            buah: this.state.buah
        })
    }

    render(){
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
                                    <td><button value={index} onClick={this.HandleEdit}>Edit</button> | <button value={index} onClick={this.HandleRemove} style={{backgroundColor:"red", color:"white"}}>Delete</button></td>
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
}

export default TabelBuah
