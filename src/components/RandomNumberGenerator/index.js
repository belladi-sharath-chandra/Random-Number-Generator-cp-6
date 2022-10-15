// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  randomNumber = () => Math.ceil(Math.random() * 100)

  onGenerate = () => {
    const random = this.randomNumber()
    this.setState({number: random})
  }

  render() {
    const {number} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a Random Number In the Range Of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.onGenerate}>
            Generate
          </button>
          <p className="result">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
