import React from 'react'

function Button(props) {
  return (
      <div>
          <button className='btn'>{ props.text}</button>
    </div>
  )
}

export default Button