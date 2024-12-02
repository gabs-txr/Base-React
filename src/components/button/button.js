import React from 'react';

const Label = (label) => {
    alert(`A label desse botão é <${label}>`)
}

const Button = (props) => {
    return <button className='btn' onClick={() => Label(props.label)}>{props.label}</button>
}


Button.defaultProps = {
    label: 'Clique aqui'
}

export default Button