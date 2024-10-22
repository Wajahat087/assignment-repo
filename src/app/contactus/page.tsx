import Link from "next/link";

export default function contactus() {
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
<h1 className="font-bold text-center">Address: </h1>
<h1 className="font-bold text-lg text-center">Governor House</h1>
<h2 className="font-medium text-center">V22G+89Q, Aiwan-e-Sadar, Civil Lines, Karachi, Karachi City, Sindh 75580</h2>
    </div>
    );
}