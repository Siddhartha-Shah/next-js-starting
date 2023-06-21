'use client'

 import Link from "next/link"
 import Image from "next/image";
export default function Navigation() {
 return (
  <>
<h1>Root Page</h1>
<Link href="/posts/first-post">post page</Link>
<Image
src="/images/img.jpg"
width={144}
height={144}
alt="sidhu"
/>
    </>
 )

  
}