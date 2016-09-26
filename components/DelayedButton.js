const React = require('react')

class DelayedButton extends React.Component {
  render(){
      return (
      <button  onClick={(e) => {
       const newArray = []
       newArray.push(e.clientX, e.clientY)
       e.persist(this.props.delay)
       this.props.onDelayedClick(e)
    }}>delayed BUTTon</button>
    )
  } 
}


module.exports = DelayedButton