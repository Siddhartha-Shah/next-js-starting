import "../css/customcss.css";

export const getStaticProps = async () => {
  const res = await fetch('http://127.0.0.1:8000/api/getCustomers')
  const repo = await res.json()
  return { props: { repo } }
}
 
export default function Page({ repo }) {
  return(
    <div>
    {
    repo.map((post) =>
        <>
    <h1>{post.customer_name}</h1>
    <h2>{post.customer_address}</h2>
    </>
    )
    }
  </div>
  )
  
 
}