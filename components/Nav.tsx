import Link from 'next/link'


type Props = {}

const Nav = (props: Props) => {
      
  return (
    <>
      {/* <label>
        <input type="checkbox" />
        {/* <aside></aside> }
      </label> */}
      <nav className='flex flex-col'>
        <Link href="/about">about</Link>
        <Link href="/portfolio">portfolio</Link>
        <Link href="/">home</Link>
      </nav>
    </>
  )
}

export default Nav