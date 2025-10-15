import React from 'react';

// Define the name of your logo file in the public folder
const C25_LOGO_PATH = '/logo.png';

export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  // If you want to use it as an <img> tag:
  return (
    <img
      src={C25_LOGO_PATH}
      alt="C25 Logo"
      style={{ height: '50px', width: '112px' }} // Optional: set the size to match the original SVG viewBox
      {...props as React.ImgHTMLAttributes<HTMLImageElement>} // Spread props (like className, etc.)
    />
  );

  /*
  // OR, if you MUST return an SVG element but want to use an external source:
  // This is less common but is sometimes used for consistency.
  // NOTE: An SVG with no paths is generally useless, so the <img> method above is preferred.
  return (
    <svg
      viewBox="0 0 112 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      // You could potentially use a <use> tag here, but it's often complicated 
      // by cross-origin security issues when referencing external files.
    </svg>
  );
  */
};