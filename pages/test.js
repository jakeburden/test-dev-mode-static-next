import { useState } from "react"
import Link from "next/link"

const Page = () => {
  const [text, setText] = useState("Test page")

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