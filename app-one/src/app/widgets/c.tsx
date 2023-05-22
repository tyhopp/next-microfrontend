import Link from "next/link"

export default function C() {
  return (
    <>
      <p>c widget</p>
      <br />
      <Link href="/app-one/a">go back to a</Link>
      <br />
      <Link href="/app-one/b">go back to b</Link>
    </>
  )
}