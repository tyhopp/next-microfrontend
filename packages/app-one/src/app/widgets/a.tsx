import Link from "next/link"

export default function A() {
  return (
    <>
      <p>a widget</p>
      <br />
      <Link href="/app-one/b">go to b</Link>
    </>
  )
}