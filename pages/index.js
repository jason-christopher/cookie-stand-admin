import Head from 'next/head';
import Link from 'next/Link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
        <meta name="description" content="Generated" />
      </Head>
      <header className='flex items-center justify-between p-4 bg-gray-500 text-red-600'>
        <h1>Cookie Stand Admin</h1>
        <p>Location</p>
      </header>
      <main className=''>

      </main>
      <footer className='p-4 bg-gray-500 text-red-600'>
        <Link href="/careers">
          Careers
        </Link>
      </footer>
    </>
  );
}
