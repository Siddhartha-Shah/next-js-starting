import {useRouter} from 'next/navigation'
import {usePathname} from 'next/navigation'
import Dashboard from './pagea'
export default function RootLayout(props) {
    const router=useRouter()
    const path=usePathname()
    return (
      <>
      <button type="button" onClick={() => router.push('/')}>
      Dashboard
    </button>
    
    <h1>{props.name}</h1>
    <p>pathname: {path}</p>
    
      </>
    )
  }