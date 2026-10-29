import {NextRequest,NextResponse} from "next/server";
export const runtime="nodejs";
const isEmail=(s:string)=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
export async function POST(req:NextRequest){let data:Record<string,unknown>;try{data=await req.json();}catch{return NextResponse.json({error:"Invalid request"},{status:400});}
const value=(key:string,max:number)=>typeof data[key]==="string"?(data[key] as string).trim().slice(0,max):"";
if(value("website",100))return NextResponse.json({ok:true});
const name=value("name",100),email=value("email",160),phone=value("phone",30),message=value("message",1500),interest=value("interest",70),timeframe=value("timeframe",70),source=value("source",300),query=value("query",400);
if(!name||!isEmail(email)||data.consent!=="yes")return NextResponse.json({error:"Name, email and consent are required"},{status:400});
const key=process.env.RESEND_API_KEY,recipient=process.env.LEAD_NOTIFICATION_EMAIL,from=process.env.LEAD_FROM_EMAIL;
if(!key||!recipient||!from)return NextResponse.json({error:"Lead notification service not configured"},{status:503});
const payload={from,to:[recipient],reply_to:email,subject:"New Martis Camp buyer inquiry: "+interest,text:["New buyer inquiry","Name: "+name,"Email: "+email,"Phone: "+phone,"Interest: "+interest,"Timeframe: "+timeframe,"Message: "+message,"Source: "+source,"Query: "+query,"Contact consent: yes"].join("\n")};
try{const res=await fetch("https://api.resend.com/emails",{method:"POST",headers:{"Authorization":"Bearer "+key,"Content-Type":"application/json"},body:JSON.stringify(payload),cache:"no-store"});if(!res.ok)throw new Error("Provider rejected message");return NextResponse.json({ok:true});}catch{return NextResponse.json({error:"Delivery unavailable"},{status:502});}}
