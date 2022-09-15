import React, { useState, useEffect } from 'react';
import style from '../class/ChangeButtonColor.module.scss';

const ChangeButtonColorH = () => {
  const [color, setChangeColor] = useState('#2da44e');

  useEffect(() => {
    setChangeColor('#002b5c');
  }, [])

  function changeColor() {
    const arrayColors = ['red', 'blue', 'green', 'grey', 'black', 'pink'];
    setChangeColor(arrayColors[Math.floor(Math.random() * 6)]);
  }

  return (
    <div className={style.buttonContainer}>
      <button className={style.customButton} style={{ backgroundColor: color }} onClick={changeColor}>Hook</button>
    </div>
  );
};

export default ChangeButtonColorH;
