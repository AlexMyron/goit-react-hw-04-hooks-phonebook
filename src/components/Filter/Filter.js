import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Label } from "./Filter.styled";

const Filter = ({ onChange }) => {
  const [filter, setFilter] = useState("");

  const handleQuery = (e) => {
    const query = e.currentTarget.value;
    setFilter(e.currentTarget.value);
    onChange(query);
  };
  return (
    <div>
      <h3>Find contacts by name</h3>
      <Label>
        <input
          type="text"
          name="filter"
          onChange={handleQuery}
          value={filter}
        />
        <BiSearchAlt size="18" />
      </Label>
    </div>
  );
};

export default Filter;
