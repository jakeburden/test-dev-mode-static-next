import { useState, useEffect } from "react"

const Page = () => {
  const [text, setText] = useState("Test page")


  useEffect(() => {
    setTimeout(() => {
      console.log(setText("test complete"))
    }, 5000)
  }, [])


  return <p>{text}</p>
}

export default Page