import Link from "next/link"

export default function IndexPage() {
  return (
    <>
      <p>index page</p>
      <br />
      <Link href="/app-one/a">go to app-one/a</Link>
    </>
  )
}