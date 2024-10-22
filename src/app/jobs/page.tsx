import Link from "next/link";

export default function jobs() {
    return (
        
        <div>
        <div className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
  <h1 className="font-bold"> My 1 <sup>st</sup> website assignment</h1>
  <div className="grow"></div>
  <div className="flex items-center justify-center gap-2 md:gap-8">
  <Link href="home">Home</Link>
  <Link href="aboutus">About us</Link>
  <Link href="blog">Blog</Link>
  <Link href="jobs">Jobs</Link>
  <Link href="contactus">Contact us</Link>
</div>
  </div>

<h1 className="hover:bg-slate-400 font-bold text-2xl text-center pt-2 pb-2  mb-5">Jobs</h1>
<div className="flex justify-center">

<button className=" object-center rounded-lg cursor-pointer bg-blue-800 mt-2 mb-2 ml-2 mr-2 pt-2 pb-2 pl-2 pr-2 hover:bg-blue-300 font-semibold">Apply Now</button>
</div>
    </div>
    );
}