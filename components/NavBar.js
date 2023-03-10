import Link from 'next/link'

const NavBar = () => {
    return (
        <>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/admin">Admin</Link>
            </nav>

        </>

    );
}

export default NavBar;