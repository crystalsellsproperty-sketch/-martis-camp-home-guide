import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Lookout Lodge & Northstar Ski Access",
  description: "Explore Martis Camp’s Lookout Lodge: slopeside dining, après-ski, equipment storage, valet parking, community shuttles and access to Northstar."
};
export default function LookoutLodge() {
  return <section className="content resources">
    <p className="eyebrow">WINTER AT MARTIS CAMP</p>
    <h1>Lookout Lodge &amp; Northstar Ski Access</h1>
    <span className="goldrule"/>
    <p>Begin with breakfast, gear up at the lodge, and head out to Northstar. Return for a relaxed lunch or après-ski by the fire. Lookout Lodge brings dining and mountain conveniences together in a private club setting at the base of Lookout Mountain.</p>
    <div className="resourceGrid">
      <article className="resourceCard"><p className="eyebrow">MOUNTAIN ACCESS</p><h2>A convenient connection to Northstar.</h2><p>Lookout Lodge provides convenient access to Northstar California via the Martis Camp Express chairlift. The private experience is the lodge and restricted vehicle access through the community; this guide does not describe the chairlift itself as exclusive to Martis Camp.</p><p>Confirm current lift operating dates, weather conditions and required Northstar lift tickets or passes separately.</p></article>
      <article className="resourceCard"><p className="eyebrow">DINING &amp; APRÈS-SKI</p><h2>A place to pause between runs.</h2><p>Indoor and outdoor dining, fireside seating, a bar and terraces overlooking Lookout Mountain create a setting for breakfast, lunch and après-ski. Dining at Lookout Lodge is part of the private club experience, subject to membership, guest policies and seasonal service.</p></article>
      <article className="resourceCard"><p className="eyebrow">ARRIVAL &amp; GEAR</p><h2>From your front door to the slopes.</h2><p>Club services include community shuttles, valet parking, ski and snowboard storage, and equipment tuning. The club describes home-pickup shuttles for members and their guests during the ski season.</p><p>Vehicle access is restricted to eligible members and guests. Parking is managed under club policies, with guest eligibility and limits that may vary by day or holiday period. Confirm current arrangements rather than assuming unrestricted homeowner parking.</p></article>
      <article className="resourceCard"><p className="eyebrow">BEFORE YOU BUY</p><h2>Understand the membership details.</h2><p>Homeownership and club membership are separate. Purchasing a home or homesite does not guarantee lodge, dining, parking or other club privileges.</p><ul><li>Confirm the applicable membership category and availability.</li><li>Ask about family and guest access to Lookout Lodge and dining.</li><li>Verify parking reservations, vehicle limits and holiday restrictions.</li><li>Check shuttle schedules, storage arrangements and service charges.</li><li>Confirm Northstar pass requirements and lift operations.</li></ul></article>
    </div>
    <div className="resourceCta"><p className="eyebrow">EXPLORE THE MARTIS CAMP LIFESTYLE</p><h2>Find a home that fits your mountain days.</h2><p>Talk with Crystal about residences, homesites and the questions to ask when evaluating club amenities.</p><Link className="btn" href="/schedule-private-tour">Ask Crystal About Martis Camp</Link> <Link className="btn outline" href="/resources">Buyer &amp; Seller Resources</Link></div>
    <h2>Official resources</h2><div className="resourceLinks">
      <a href="https://www.martiscamp.com/lake-tahoe-skiing/" target="_blank" rel="noopener noreferrer">Martis Camp’s Northstar ski connection ↗</a>
      <a href="https://martiscamp.org/club" target="_blank" rel="noopener noreferrer">Club amenities and Lookout Lodge history ↗</a>
      <a href="https://www.martiscamp.com/meet-danny-kruck-ski-lodge-manager-by-winter-assistant-golf-pro-by-summer/" target="_blank" rel="noopener noreferrer">Lookout Lodge member services ↗</a>
    </div><p className="notice">Independent information, not an offer of club membership or a guarantee of access. Amenities, services, fees, guest privileges and seasonal operations may change. Confirm current terms directly with Martis Camp Club and Northstar. Not affiliated with or endorsed by either organization.</p>
  </section>;
}