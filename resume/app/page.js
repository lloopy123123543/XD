import Link from "next/link";

export default function Home() {
  return (
    <Link href={'/login'}>
    <button>login</button>
    </Link>
  )
}
