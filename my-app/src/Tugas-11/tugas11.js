import React, {Component} from 'react'


class Timer extends Component{
    constructor(props){
      super(props)
      this.state = {
        time: "",
        count: 0
      }
    }
  
    componentDidMount(){
      this.setState({
          time: new Date().toLocaleTimeString(),
          count: this.props.start === undefined ? 5:this.props.start,
      })
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
      this.countDownID = setInterval(
        () => this.countDown(),
        1000
      );
    }
  
    componentWillUnmount(){
      clearInterval(this.timerID);
      clearInterval(this.countDownID);
      this.hideTime()
    }
  
    tick() {
      const time = new Date().toLocaleTimeString()
      this.setState({
        time: time
      })
    }
  
    countDown(){
      this.setState({
        count:this.state.count -1
      })
      if(this.state.count <= 0){
        this.componentWillUnmount()
      }
    }
    hideTime(){
      this.setState({showTime: !this.state.showTime})
    }
  
    
    render(){
      return (
        <>
          {
            !this.state.showTime && (
          <div style = {{display:"flex",justifyContent:"space-between", padding:"30px"}}>
            <h3>Sekarang Jam: {this.state.time}</h3>
            <h3>Hitung Mundur: {this.state.count}</h3>
          </div>
            )}
        </>
      )
  
    }
  }
  
  export default Timer
  