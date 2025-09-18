import styled from "styled-components";
import Button from "../Button/Button";
import { AddRounded, ExploreRounded } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const Container = styled.div`
  /* height: 100%;
 overflow-y: scroll; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.text_primary};
  font-weight: bold;
  font-size: 22px;
  padding: 1rem 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`;

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");
  console.log(`text of - ${path}`);

  return (
    <Container>
      ImageNex
      {path[1] === "post" ? (
        <Button
          onClick={() => navigate("/")}
          text="Explore Posts"
          leftIcon={<ExploreRounded style={{ fontSize: "18px" }} />}
          type="secondary"
        />
      ) : (
        <Button
          onClick={() => navigate("/post")}
          text="Create new Post"
          leftIcon={<AddRounded style={{ fontSize: "18px" }} />}
        />
      )}
    </Container>
  );
};
export default NavBar;
