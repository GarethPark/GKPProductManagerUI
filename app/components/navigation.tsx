import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <a className="hover:text-gray-200">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/test-server">
            <a className="hover:text-gray-200">Test Server</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
