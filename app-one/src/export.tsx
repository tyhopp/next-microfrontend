import A from "./app/widgets/a"
import B from "./app/widgets/b"
import C from "./app/widgets/c"
import EchoAppended from "./app/widgets/echo-appended"
import { GET as echoAppended } from './app/api/app-one/echo-appended/route'

const routes = [
  {
    slug: "a"
  },
  {
    slug: "b"
  },
  {
    slug: "c"
  }
]

export async function generateStaticParams() {
  return routes
}

export function Page({ params }: { params: { slug: string } }) {
  return (
    <div style={{ border: '1px solid', flex: 1, margin: '1rem', padding: '1rem' }}>
      <p style={{ display: 'block' }}>app-one</p>
      <EchoAppended />
      {params.slug === "a" && <A />}
      {params.slug === "b" && <B />}
      {params.slug === "c" && <C />}
    </div>
  )
}

export const api = {
  echoAppended
}