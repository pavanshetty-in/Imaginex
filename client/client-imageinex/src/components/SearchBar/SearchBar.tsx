import styled from "styled-components";
import { SearchOutlined } from "@mui/icons-material";
import type React from "react";

const SearchBarContainer = styled.div`
  max-width: 22rem;
  min-width: 15rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.text_secondary + "40"};
  padding: 0.5rem 1rem;
  cursor: pointer;
  gap: 0.5rem;
  color: ${({ theme }) => theme.text_primary};

`;

const SearchBar = ({
  searchText ='',
  setSearchText,
}: {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <SearchBarContainer>
      <SearchOutlined />
      <input
        type="text"
        placeholder="Search with Prompt or name"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{
          border: "none",
          width: "100%",
          outline: "none",
          background: "transparent",
          fontSize: "1em",
          color: "inherit",
          
        }}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
