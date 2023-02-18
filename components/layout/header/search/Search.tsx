import { FC, useState } from "react";
import styles from "./Search.module.scss";

const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;
