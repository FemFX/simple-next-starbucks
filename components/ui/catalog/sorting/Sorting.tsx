import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { FC, Dispatch, SetStateAction } from "react";
import { sortingData } from "./sorting.data";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { EnumSorting } from "./sorting.interface";

interface ISorting {
  sortType: EnumSorting;
  setSortType: Dispatch<SetStateAction<EnumSorting>>;
}

const Sorting: FC<ISorting> = ({ sortType, setSortType }) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {sortingData.find((sort) => sort.value === sortType).label}
      </MenuButton>
      <MenuList>
        {sortingData.map((sort) => (
          <MenuItem key={sort.value} onClick={() => setSortType(sort.value)}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Sorting;
