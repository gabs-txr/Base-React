import React from 'react';


const ColoredText = (props) => {
  const { text, color } = props;

  return (
    <p style={{ color: color, textTransform: 'uppercase', fontSize: '18px' }}>
      {text}
    </p>
  );
}

ColoredText.defaultProps = {
  text: 'Texto Padrão',
  color: 'black'          
};

export default ColoredText;