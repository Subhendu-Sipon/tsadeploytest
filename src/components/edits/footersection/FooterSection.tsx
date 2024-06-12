import Link from 'next/link';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";


const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-6">
      <div className="container mx-auto text-center mt-56">
        <h1 className="text-15xl font-bold">TSA</h1>

        <div className='flex'>
        <div className="flex w-1/3 mt-72">
          <Link href="/about" className="text-white mx-2">About</Link>
          <Link href="/contact" className="text-white mx-2">Contact</Link>
          <Link href="/case-studies" className="text-white mx-2">Case Studies</Link>
          <Link href="/blog" className="text-white mx-2">Blog</Link>
          <Link href="/privacy" className="text-white mx-2">Privacy</Link>
        </div>
        <div className="flex justify-center space-x-6 mt-72 w-1/3">
          <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className='h-8 w-8' />
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram  className='h-8 w-8' />
          </a>
          <a href="https://www.youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
            <AiFillYoutube className='h-8 w-8' />
          </a>
          <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <AiFillFacebook className='h-8 w-8' />
          </a>
        </div>
        <div className="mt-72 w-1/3">
          <p className="text-sm">Proudly created in India.</p>
          <p className="text-sm">All Right Reserved.</p>
        </div>
      </div>

      </div>
    </footer>
  );
}

export default Footer;
