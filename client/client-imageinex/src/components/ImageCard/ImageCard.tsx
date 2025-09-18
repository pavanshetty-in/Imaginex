import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Avatar } from "@mui/material";
import { DownloadRounded } from "@mui/icons-material";
import FileSaver from "file-saver";

const Card = styled.div`
  position: relative;
  display: flex;
  border-radius: 20px;
  gap: 10px;
  background: ${({ theme }) => theme.card};
  box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + "10"};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + "20"};
    scale: 1.01;
  }
  &:nth-child(7n + 1) {
    grid-column: auto / span 2;
    grid-row: auto / span 2;
  }
`;

const HoverOverlay = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: end;
  flex-direction: column;
  align-items: start;
  gap: 2px;
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.3);
  color: ${({ theme }) => theme.white};
  transition: all 0.3s ease;

  ${Card}:hover & {
    opacity: 1;
    padding: 1rem;
  }
`;

const Prompt = styled.div`
  font-weight: 400;
  font-size: 1em;
  color: ${({ theme }) => theme.white};
`;

const Author = styled.div`
  font-weight: 500;
  font-size: 0.9em;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: ${({ theme }) => theme.white + "cc"};
`;

const DownloadDiv = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
}

const ImageCard = () => {
    return (
        <Card>
            <LazyLoadImage
                width={"100%"}
                src="https://www.albertjuhe.com/images/02.jpg"
            />
            <HoverOverlay>
                <Prompt>Lorem ipsum dolor </Prompt>
                <div style={DownloadDiv}><Author>
                    <Avatar style={{ width: "1.6rem", height: "1.6rem", fontSize: "1em" }}>S</Avatar>
                    Pavan Shetty</Author>
                    <DownloadRounded onClick={() => FileSaver.saveAs(`https://www.albertjuhe.com/images/02.jpg`, `download.jpg`)} />
                </div>

            </HoverOverlay>
        </Card>
    );
};

export default ImageCard;
