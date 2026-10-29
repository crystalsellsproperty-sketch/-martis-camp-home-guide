import type { MetadataRoute } from "next";
export default function robots():MetadataRoute.Robots{return {rules:[{userAgent:"*",disallow:"/"}]};}
// Private preview only: change after legal disclosures, authorized data and site approval.
