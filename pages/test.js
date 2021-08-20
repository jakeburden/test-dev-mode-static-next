import { useState, useEffect } from "react"
import Link from "next/link"

const Page = () => {
  const [text, setText] = useState("Test page")


  useEffect(() => {
    setTimeout(() => {
      console.log(setText("test ran"))
    }, 5000)
  }, [])


  return (
    <div>
      <p>{text}</p>
      <Link href="/">
        <a>Home page</a> 
      </Link>
    </div>
  )
}

export default Page