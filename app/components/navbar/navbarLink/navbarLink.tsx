

import Link from 'next/link';
import clsx from 'clsx';
import { MouseEventHandler } from 'react';


interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  variant: 'desktop' | 'mobile';
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export default function NavLink({ href, children, variant, onClick }: NavLinkProps) {

 
  const baseClasses = 'text-gray-700 transition block';

  
  const desktopClasses = 'font-medium hover:text-blue-600 hover:underline underline-offset-4 decoration-gray-400 hover:decoration-blue-600';

  
  const mobileClasses = `
  py-2 w-full text-center transition
  active:text-blue-600 active:underline active:decoration-blue-600
  active:text-blue-600 active:underline active:decoration-blue-600
  focus:text-blue-600 focus:underline focus:decoration-blue-600
  underline-offset-4 decoration-gray-400
`;


  
  const className = clsx(
    baseClasses,
    {
      [desktopClasses]: variant === 'desktop',
      [mobileClasses]: variant === 'mobile',
    }
  );

  return (
    <li>
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    </li>
  );
}