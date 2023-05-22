import A from "./app/widgets/a"
import B from "./app/widgets/b"
import C from "./app/widgets/c"

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

// @ts-ignore
export function Page({ params }) {
  switch (params.slug) {
    case "a":
      return <A />
    case "b":
      return <B />
    case "c":
      return <C />
  }
}