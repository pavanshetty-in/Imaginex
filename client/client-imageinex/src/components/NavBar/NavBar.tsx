import styled from "styled-components";
import Button from "../Button/Button";
import { LensBlur, ExploreRounded } from "@mui/icons-material";
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
  padding: 1rem 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  @media (min-width: 427px) {
    padding: 1rem 2rem;
  }
`;

const LogoDiv = styled.div`
  display: flex;
  gap: 5px;
`;

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");
  console.log(`text of - ${path}`);

  return (
    <Container>
      <LogoDiv>
        <img src="./../../public/imageinex.svg" width="25" height="25" style={{paddingTop:"2px"}} />
        Imageinex
      </LogoDiv>

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
          text="Generate AI Visual"
          leftIcon={<LensBlur style={{ fontSize: "28px" }} />}
        />
      )}
    </Container>
  );
};
export default NavBar;
