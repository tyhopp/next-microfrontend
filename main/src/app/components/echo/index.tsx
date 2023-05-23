"use client"

import * as React from "react"

// The main app should not have components, but this lets test integration
// with api routes at the top level
export default function Echo() {
  const [echo = {}, setEcho] = React.useState<string>()

  React.useEffect(() => {
    // Consuming dynamic data works as expected
    fetch('/api/echo?message=check%20check%20one%20two')
      .then(response => response.json())
      .then(data => setEcho(data))
  }, [])

  return (
    <div>
      <p>Echo (dynamic top-level api route):</p>
      <pre>{JSON.stringify(echo)}</pre>
    </div>
  )
}