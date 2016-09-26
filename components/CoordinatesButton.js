const React = require('react')

class CoordinatesButton extends React.Component {
  render(){
      return (
      <button  onClick={(e) => {
       const newArray = []
       newArray.push(e.clientX, e.clientY)
       this.props.onReceiveCoordinates(newArray)
    }}>coordinates BUTTon</button>
    )
  } 
}


module.exports = CoordinatesButton