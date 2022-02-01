import Link from "next/link";
import React from "react";

const Timeline = () => {
  return (
    <>
      <h1>This is the timeline</h1>
      <nav>
        <Link href="/">Go to home</Link>
      </nav>
      <style jsx>{`
        h1 {
          font-size: 3rem;
          color: red;
        }
      `}</style>
    </>
  );
};

export default Timeline;
