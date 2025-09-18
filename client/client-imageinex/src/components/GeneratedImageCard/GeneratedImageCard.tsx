import { CircularProgress } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  min-height: 300px;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  padding: 0.8rem;
  border: 1px dashed ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.arrow + 80};
  border-radius: 8px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  background: ${({ theme }) => theme.black};
`;

const GeneratedImageCard = ({
  src,
  GenerateImageLoading
}: {
  src: string;
  GenerateImageLoading: boolean;
}) => {
  return (
    <Container>
      {GenerateImageLoading ? (
      
        <>  <CircularProgress  style={{ color: "inherit", width: "1.5rem", height: "1.5rem" }}/> Generating...</>
      ) : src ? (
        <Image src={src}/>
      ) : (
        <>Write a Prompt to Generate Image...</>
      )}
    </Container>
  );
};
export default GeneratedImageCard;
