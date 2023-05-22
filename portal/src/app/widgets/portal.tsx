"use client"

import * as React from "react"
import Link from "next/link"

export default function Portal(): React.ReactElement {
  const [items, setItems] = React.useState<{ name: string, href: string }[]>([])

  React.useEffect(() => {
    // Check auth, redirect if not logged in
    // Generate menu items based on role

    // Example menu items
    setItems([
      { name: "app-one", href: "/app-one/a" },
      { name: "app-two", href: "/app-two" }
    ])
  }, [])

  return (
    <nav style={{ display: 'flex', flexDirection: 'column', width: '300px', height: '100vh', border: '1px solid', margin: '1rem', padding: '1rem' }}>
      <p>Portal</p>
      <ul>
        {items.map((item) => (
          <li>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}