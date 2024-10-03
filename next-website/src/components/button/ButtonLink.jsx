'use client';
import Link from 'next/link';
const ButtonLink = ({ url, children }) => {
    return (
        <Link href={url}>
            <button className="p-3 cursor-pointer bg-green-500 rounded-md max-w-fit">
                {children}
            </button>
        </Link>
    );
};

export default ButtonLink;
