import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { menu } from "./menu.data";
import MenuItem from "./menu-item/MenuItem";
import styles from "./Menu.module.scss";

const Menu: FC = () => {
  return (
    <div className={styles.menu}>
      <Link href={"/"}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/ru/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
          alt="Starbucks"
          width={100}
          height={100}
        />
      </Link>
      <nav>
        <ul>
          {menu.map((item, idx) => (
            <MenuItem key={idx} item={item} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
