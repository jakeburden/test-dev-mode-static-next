import { useState, useEffect } from "react"

const Page = () => {

  const [text, setText] = useState("Hello, World")


  useEffect(() => {
    setTimeout(() => {
      console.log(setText("initial run complete"))
    }, 5000)
  }, [])


  return <p>{text}</p>
}

export default Page