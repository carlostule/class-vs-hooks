import React, { Component} from "react";
import style from "./ChangeButtonColor.module.scss";

class ChangeButtonColor extends Component {
  constructor() {
    super();
    this.state = {
      color: ''
    };
  }

  componentWillMount() {
    this.setState({ color: '#2da44e' });
  }

  componentDidMount() {
    this.setState({ color: '#002b5c' });
  }


  changeColor = () => {
    const arrayColors = ['red', 'blue', 'green', 'grey', 'black', 'pink'];
    this.setState({ color: arrayColors[Math.floor(Math.random() * 6)] });
  }

  render() {
    const { color } = this.state;
    return (
      <div className={style.buttonContainer}>
        <button className={style.customButton} style={{ backgroundColor: color }} onClick={this.changeColor}>Class</button>
      </div>
    )
  }
}

export default ChangeButtonColor; 
