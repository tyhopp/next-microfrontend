import Greeting from "./components/greeting"
import Echo from "./components/echo"

export default function IndexPage() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column' }}>
      <p style={{ display: 'block' }}>index page</p>
      <Greeting />
      <Echo />
    </main>
  )
}