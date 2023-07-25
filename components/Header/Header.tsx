import Link from "next/link";

const links: string[] = ["עמוד הבית", "קהילה", "הפרויקטים", "מי אנחנו"];

const Header: React.FC = () => {
  return (
    <ul>
      {links.map((link) => (
        <li key={link}>
          <Link href="/">{link}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Header;