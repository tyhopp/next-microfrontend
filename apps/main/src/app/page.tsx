import Greeting from "./widgets/greeting"
import Echo from "./widgets/echo"

export default function IndexPage() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column' }}>
      <p style={{ display: 'block' }}>index page</p>
      <Greeting />
      <Echo />
    </main>
  )
}