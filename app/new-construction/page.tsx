import type {Metadata} from "next";
import Link from "next/link";
export const metadata:Metadata={title:"New Construction"};
export default function Page(){return <section className="content"><p className="eyebrow">MARTIS CAMP HOME GUIDE</p><h1>New Construction</h1><p>Explore new-build and custom construction opportunities. Information will be verified before publishing.</p><p className="notice">Preview page — this website is under development and is not yet accepting inquiries or showing verified inventory.</p><Link href="/">Back to Home</Link></section>}