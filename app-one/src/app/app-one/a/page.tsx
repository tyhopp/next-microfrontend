import A from "../../widgets/a"
import EchoAppended from "../../widgets/echo-appended"

export default function PageA() {
  return (
    <div style={{ border: '1px solid', flex: 1, margin: '1rem', padding: '1rem' }}>
      <p style={{ display: 'block' }}>app-one</p>
      <EchoAppended />
      <A />
    </div>
  )
}