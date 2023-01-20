import cx from "classnames";
import Link from "next/link";

interface MenuProps {
  title: string;
  active?: boolean;
  url: string;
}

export default function Menu(props: Partial<MenuProps>) {
  const { title, active, url } = props;

  // handle logic using library classnames
  const classTitle = cx({
    "nav-link": true,
    active: active,
  });

  return (
    <li className="nav-item my-auto">
      <Link legacyBehavior href={url}>
        <a className={classTitle} aria-current="page">
          {/* Props */}
          {title}
        </a>
      </Link>
    </li>
  );
}
