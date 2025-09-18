import styled from "styled-components";
import SearchBar from "../components/SearchBar/SearchBar";
import ImageCard from "../components/ImageCard/ImageCard";

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

const HeadLine = styled.div`
  font-size: 1.5em;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.3rem;
  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 425px) {
    font-size: 1em;
  }
`;
const Span = styled.div`
  font-size: 2em;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 0.5rem;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 0;
  justify-content: center;
  background: inherit;
`;

const CardWrapper = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 640px) and (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Home = () => {
  return (
    <Container>
      <HeadLine>
        Explore popular posts in the Community!
        <Span>Generated with AI</Span>
      </HeadLine>

      <SearchBar />
      <Wrapper>
        <CardWrapper>
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </CardWrapper>
      </Wrapper>
    </Container>
  );
};
export default Home;
