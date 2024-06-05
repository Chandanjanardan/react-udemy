import React, { useState } from 'react'

function App() {
  const [loading,setLoading]=useState(false)
  const [post,setPost]=useState({})
  const [error,setError]=useState(false)

  const handleFetch=()=>{
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res)=>{
    return res.json()
    .then((data)=>{
      console.log(data)
      setPost(data)
      setLoading(false)
    })
    })
    .catch((err)=>{
      console.error(err)
    })
  }
  
  return (
    <div>
      <button onClick={handleFetch}>
        {loading ? "Wait...":"Fetch the post"}
      </button>
        <p>{post?.title}</p>
    </div>
  )
}

export default App