import React from "react";
import Link from "next/link";

const Portfolio = () => {
    return (
        <div>
            <h1 className="m-5 text-8xl">Choose a gallery</h1>
            <div className="flex gap-12">
                <Link href="/portfolio/illustrations" className="border-2 rounded-md w-[300px] h-[400px] relative bg-cover bg-[url('/illustration.png')] group">
                    <span className="absolute right-2 bottom-2 text-3xl font-bold group-hover:text-green-500 transition-colors ">Illustrations</span>
                </Link>
                <Link href="/portfolio/websites" className="border-2 rounded-md w-[300px] h-[400px] relative bg-cover bg-[url('/websites.jpg')] group">
                    <span className="absolute right-2 bottom-2 text-3xl font-bold group-hover:text-green-500 transition-colors">Websites</span>
                </Link>
                <Link href="/portfolio/application" className="border-2 rounded-md w-[300px] h-[400px] relative bg-cover bg-[url('/apps.jpg')] group">
                    <span className="absolute right-2 bottom-2 text-3xl font-bold group-hover:text-green-500 transition-colors">Application</span>
                </Link>
            </div>
        </div>
    );
};

export default Portfolio;