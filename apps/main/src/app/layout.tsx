import { Portal } from "portal"
import "design-system/main.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ display: "flex" }}>
        <Portal />
        {children}
      </body>
    </html>
  )
}
