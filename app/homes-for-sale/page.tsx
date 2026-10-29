import type {Metadata} from "next";
import Link from "next/link";
export const metadata:Metadata={title:"Homes for Sale"};
export default function Page(){return <section className="content"><p className="eyebrow">MARTIS CAMP HOME GUIDE</p><h1>Homes for Sale</h1><p>Current inventory will be displayed here once a permitted listing feed is connected. No property availability is implied.</p><p className="notice">Preview page — this website is under development and is not yet accepting inquiries or showing verified inventory.</p><Link href="/">Back to Home</Link></section>}