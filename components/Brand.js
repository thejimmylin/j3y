import Link from "next/link";

const Brand = () => {
  const href = "/";
  const brandChars = "Jimmy Lin";
  const brandCharElments = brandChars.split("").map((char, index) => (
    <span className={`animate-fadein-1000-${200 + index * 50}`} key={index}>
      {char}
    </span>
  ));

  return (
    <Link href={href}>
      <a>{brandCharElments}</a>
    </Link>
  );
};

export default Brand;
