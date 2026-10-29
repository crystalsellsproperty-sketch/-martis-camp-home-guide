import type {Metadata} from "next";
import Link from "next/link";
export const metadata:Metadata={title:"Martis Camp Market Insights"};
export default function Page(){return <section className="content"><p className="eyebrow">MARTIS CAMP HOME GUIDE</p><h1>Martis Camp Market Insights</h1><p>Original market analysis and verified sold-property data will be published here.</p><p className="notice">Preview page — this website is under development and is not yet accepting inquiries or showing verified inventory.</p><Link href="/">Back to Home</Link></section>}