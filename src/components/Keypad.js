import React from 'react'

class Keypad extends React.Component{
  onKeyUp = ()=> console.log('Entering password...')
  render(){
  return{
    <div>
    <input
    type="password"
    onKeyUP()={this.keyUp}
    </div>
  }
}
}
export default EyesOnMe;
