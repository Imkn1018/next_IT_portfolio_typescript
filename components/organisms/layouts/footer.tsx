import Container from '../../container';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div>
          <a href="https://github.com/Imkn1018">
            <img src="/images/github.svg" alt="logo" />
          </a>
          <a href="https://www.google.com/">
            <img src="/images/linkedin.svg" alt="logo" />
          </a>
          <a href="https://www.google.com/">
            <img src="/images/twitter.svg" alt="logo" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100010857344034">
            <img src="/images/facebook.svg" alt="logo" />
          </a>
          <hr />
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          <p>©{new Date().getFullYear()} Kentaro Imai</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
