import type {Metadata} from "next";
import Link from "next/link";
export const metadata:Metadata={title:"Homesites for Sale"};
export default function Page(){return <section className="content"><p className="eyebrow">MARTIS CAMP HOME GUIDE</p><h1>Homesites for Sale</h1><p>Explore land and custom-building opportunities; inventory requires verification and authorized listing data.</p><p className="notice">Preview page — this website is under development and is not yet accepting inquiries or showing verified inventory.</p><Link href="/">Back to Home</Link></section>}