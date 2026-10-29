import type {Metadata} from "next";
import Link from "next/link";
export const metadata:Metadata={title:"Request a Private Tour"};
export default function Page(){return <section className="content"><p className="eyebrow">MARTIS CAMP HOME GUIDE</p><h1>Request a Private Tour</h1><p>Tour inquiries will be available after the secure lead form and CRM connection are tested.</p><p className="notice">Preview page — this website is under development and is not yet accepting inquiries or showing verified inventory.</p><Link href="/">Back to Home</Link></section>}