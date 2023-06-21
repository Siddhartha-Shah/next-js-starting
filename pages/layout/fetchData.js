import { useState, useEffect } from 'react'
 
export default function  Profile() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
 
  useEffect(() => {
    setLoading(true)
    fetch('http://127.0.0.1:8000/api/getCustomers')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
 return(
    <div>
        {
        data.map((post) =>
            <>
        <h1>{post.customer_name}</h1>
        <h2>{post.customer_address}</h2>
        </>
        )
        }
      </div>
 )
}