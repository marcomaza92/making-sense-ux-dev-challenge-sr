import React, { useEffect, useState } from "react";
import Button from "../../atoms/Button/Button";
import FormControl from "../../atoms/FormControl/FormControl";
import Text from "../../atoms/Text/Text";
import styles from "./Search.module.css";
import { SearchProps } from "./Search.types";

const Search = (props: SearchProps) => {
  const { value = "", onSearchChange } = props;
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    if (inputValue === "") {
      onSearchChange(inputValue);
    }
  }, [inputValue, onSearchChange]);

  const handleInputChange = () => {
    onSearchChange(inputValue);
  };

  return (
    <div className={styles.search}>
      <FormControl
        aria-label="Search by name"
        placeholder="Search by name"
        type="search"
        className={styles.searchInput}
        defaultValue={inputValue}
        onChange={(event: {
          currentTarget: { value: React.SetStateAction<string> };
        }) => setInputValue(event?.currentTarget.value)}
      />
      <Button
        onClick={handleInputChange}
        type="search"
        className={styles.searchButton}
      >
        <Text tag="p" type="caption" weight="bold">
          Search
        </Text>
      </Button>
    </div>
  );
};

export default Search;
