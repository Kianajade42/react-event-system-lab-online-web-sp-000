import React from 'react'

class Keypad extends React.Component{
  handleInputPassword = ()=> console.log('Entering password...')
  render(){
  return(
    <div>
    <input
    type="password"
    onKeyUP()={this.handleInputPassword}
    />
    </div>
  )
}
}
export default Keypad;
