import { useState } from "react"
import Link from "next/link"

const Page = () => {
  const [text, setText] = useState("Hello, World")

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