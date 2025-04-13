import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

// Import your image
import profilePic from '../public/profile.jpg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Awesome Website</title>
        <meta name="description" content="A simple home page built with React and Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to My Little Corner of the Web!</h1>

        <section>
          <h2>About Me</h2>
          <Image src={profilePic} alt="My Profile Picture" width={200} height={200} />
          <p>Hi there! My name is [Your Name], and I'm a student in CSS 480 at the University of Washington. I'm excited to learn more about web development and build interesting projects. In my free time, I enjoy [mention a few hobbies or interests]. This is my first foray into building a website with React, and I'm looking forward to the journey!</p>
        </section>

        {/* ... rest of your content ... */}
      </main>
    </div>
  );
}