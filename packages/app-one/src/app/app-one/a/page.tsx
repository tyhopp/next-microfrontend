import A from "../../widgets/a"
import EchoAppended from "../../widgets/echo-appended"
import { Example } from "design-system"

export default function PageA() {
  return (
    <div style={{ border: '1px solid', flex: 1, margin: '1rem', padding: '1rem' }}>
      <p className="text-red-500" style={{ display: 'block' }}>app-one</p>
      <Example />
      <EchoAppended />
      <A />
    </div>
  )
}