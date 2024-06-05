import React from 'react'

function Test({title,children}) {
  return (
    <div>
        <h3>{title}</h3>
        <h1>{children}</h1>
    </div>
  )
}

export default Test