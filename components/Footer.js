import Link from 'next/link';

export default function Footer({ locations }) {
  return (
    <footer className='font-serif p-4 mt-8 bg-green-300 text-black'>
      <p className='text-xl'>{locations.length} Locations World Wide</p>
      <p>&copy; 2023</p>
      <Link href="/careers" className=' text-black hover:text-red-500'>
          Careers
      </Link>
    </footer>
  );
}
