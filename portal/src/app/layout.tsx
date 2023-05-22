import Portal from './widgets/portal'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ display: 'flex' }}>
        <Portal />
        {children}
      </body>
    </html>
  )
}
