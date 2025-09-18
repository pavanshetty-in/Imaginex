import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Theme";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import { Container } from "@mui/material";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text_primary};
  overflow-y: hidden;
  overflow-x: hidden;
  transition: all 0.3s ease;
  `;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 3;
`;


function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Wrapper>
          <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route path="/" element={<Home />}  />
              <Route path="/post" element={<CreatePost />} />
            </Routes>
          </BrowserRouter>
          
          {/* <Home/> */}
          {/* <CreatePost/> */}
        </Wrapper>
      </Container>
    </ThemeProvider>
  )
}

export default App
