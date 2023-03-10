import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
    return ( 
        <>
        
        <div className="Logo">
                <Image src="/next.svg" height={100} width={100}/>
            </div>

            <nav>
            
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/List">List</Link>
        </nav> 
            
            </>
        
     );
}
 
export default NavBar;