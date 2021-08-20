import { useState, useEffect } from "react"
import Link from "next/link"

const Page = () => {

  const [text, setText] = useState("Hello, World")


  useEffect(() => {
    setTimeout(() => {
      console.log(setText("initial run complete"))
    }, 5000)
  }, [])


  return (
    <div>
      <p>{text}</p>
      <Link href="/test">
        <a>Test page</a> 
      </Link>
    </div>
    )
}

export default Page