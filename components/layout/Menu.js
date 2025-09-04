import Link from "next/link"

export default function Menu() {

    return (
        <>
            <ul className="navigation clearfix">
                <li className=""><Link href="/features">Features</Link>
                </li>
                <li className=""><Link href="/solutions">Solutions</Link>
                </li>
                <li className=""><Link href="/pricing">Pricing</Link>
                </li>
                <li className=""><Link href="/about">About</Link>
                </li>
                <li><Link href="/contact">Contact</Link>
                </li> 
            </ul>
        </>
    )
}

