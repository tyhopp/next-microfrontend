"use client"

import * as React from "react"

export default function EchoAppended() {
  const [echo = {}, setEcho] = React.useState<string>()

  React.useEffect(() => {
    // Consuming dynamic data works as expected
    fetch('/api/app-one/echo-appended?message=Ella%20Fitzgerald')
      .then(response => response.json())
      .then(data => setEcho(data))
  }, [])

  return (
    <div>
      <p>Echo (dynamic sub-app-level api route):</p>
      <pre>{JSON.stringify(echo)}</pre>
    </div>
  )
}