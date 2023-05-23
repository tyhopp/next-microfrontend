import B from "../../widgets/b"
import EchoAppended from "../../widgets/echo-appended"

export default function PageB() {
  return (
    <div style={{ border: '1px solid', flex: 1, margin: '1rem', padding: '1rem' }}>
      <p style={{ display: 'block' }}>app-one</p>
      <EchoAppended />
      <B />
    </div>
  )
}