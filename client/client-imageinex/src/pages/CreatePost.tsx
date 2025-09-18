import styled from "styled-components";
import GenerateImageForm from "../components/GenerateImageForm/GenerateImageForm";
import GeneratedImageCard from "../components/GeneratedImageCard/GeneratedImageCard";
import { useState } from "react";

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  background: ${({ theme }) => theme.background};
  padding: 1rem 3rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }
`;

// const HeadLine = styled.div`
//   font-size: 1.5em;
//   font-weight: 500;
//   color: ${({ theme }) => theme.text_primary};
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   gap: 0.3rem;
//   @media (max-width: 768px) {
//     font-size: 1em;
//   }

//   @media (max-width: 425px) {
//     font-size: 1em;
//   }
// `;

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  height: fit-content;
  max-width: 1280px;
  gap: 2rem;
  display: flex;
  padding: 1rem 0;
  justify-content: center;
  background: inherit;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CreatePost = () => {
  const [GenerateImageLoading, setGenerateImageLoading] = useState(false);
  const [GeneratePostLoading, setGeneratePostLoading] = useState(false);
  const [post, setPost] = useState({
    name: "",
    prompt: "",
    Url: "",
  });
  return (
    <Container>
      <Wrapper>
        <GenerateImageForm
          post={post}
          setPost={setPost}
          setGenerateImageLoading={setGenerateImageLoading}
          GenerateImageLoading={GenerateImageLoading}
          setGeneratePostLoading={setGeneratePostLoading}
          GeneratePostLoading={GeneratePostLoading}
        />
        <GeneratedImageCard
          GenerateImageLoading={GenerateImageLoading}
          src={post.Url}
        />
      </Wrapper>
    </Container>
  );
};
export default CreatePost;
