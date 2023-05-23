import Link from "next/link"

export default function B() {
  return (
    <>
      <p>b widget</p>
      <br />
      <Link href="/app-one/a">go back to a</Link>
      <br />
      <Link href="/app-one/c">go to c</Link>
    </>
  )
}