"use client"

import * as React from "react"

// The main app should not have components, but this lets test integration
// with api routes at the top level
export default function Greeting() {
  const [greeting = {}, setGreeting] = React.useState<{ hello: string }>()

  React.useEffect(() => {
    // Consuming static data works as expected
    fetch('/api/hello-world')
      .then(response => response.json())
      .then(data => setGreeting(data))
  }, [])

  return (
    <div>
      <p>Greeting (static top-level api route):</p>
      <pre>{JSON.stringify(greeting)}</pre>
    </div>
  )
}

// It appears that server components cannot consume Next.js api routes (either that or I can't find any docs on the matter yet),
// so we'll make this a client component instead
// async function getData() {
//   const response = await fetch('/api/hello-world')
//   return response.json()
// }