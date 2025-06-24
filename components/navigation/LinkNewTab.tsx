import Link from "next/link";

type NavigationLink = {
  title: string;
  destination: string;
};

const LinkNewTab = ({ title, destination }: NavigationLink) => {
  return (
    <Link
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href={destination}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </Link>
  );
};

export default LinkNewTab;
