import React from 'react'

function Button(props) {
  return (
      <div>
      <button className='btn fs_sm' id={props.fontFamily}>{ props.text}</button>
    </div>
  )
}

export default Button