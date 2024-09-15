import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#"
      >
        Products
      </Link>
      <Link
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#"
      >
        Categories
      </Link>
      <Link
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#"
      >
        About
      </Link>
      <Link
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#"
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;