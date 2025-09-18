// import { Form } from "react-router-dom";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import Styled from "styled-components";
import { AutoAwesome, CreateRounded } from "@mui/icons-material";

const Form = Styled.div` 
flex: 1;
padding: 1rem 2rem;
display: flex;
flex-direction: column;
gap: 1.5rem;
justify-content: center;
`;
const Top = Styled.div`
display: flex;
flex-direction: column;
gap: 0.3rem;
`;
const Title = Styled.div` 
font-size: 1.5em;
font-weight: 500;
color: ${({ theme }) => theme.text_primary};
`;
const Desc = Styled.div` 
font-size: 1em;
font-weight: 400;
color: ${({ theme }) => theme.text_secondary};
`;
const Body = Styled.div` 
display: flex;
flex-direction: column;
gap: 1rem;
font-size: 0.8em;
font-weight: 400;
color: ${({ theme }) => theme.text_secondary};
`;
const Actions = Styled.div` 

display: flex;
flex:1;
gap: 0.5rem;

`;

interface Post {
  name: string;
  prompt: string;
  Url: string;
}

interface GenerateImageFormProps {
  post: Post;
  setPost: React.Dispatch<React.SetStateAction<Post>>;
  setGenerateImageLoading: React.Dispatch<React.SetStateAction<boolean>>;
  GenerateImageLoading: boolean;
  setGeneratePostLoading: React.Dispatch<React.SetStateAction<boolean>>;
  GeneratePostLoading: boolean;
}

const GenerateImageForm: React.FC<GenerateImageFormProps> = ({
  post,
  setPost,
  setGenerateImageLoading,
  GenerateImageLoading,
  setGeneratePostLoading,
  GeneratePostLoading,
}) => {
  
  const  HandleGenerateImageLoading =()=>{
    setGenerateImageLoading(true);
  }
  const HandleGeneratePostLoading =()=>{    
    setGeneratePostLoading(true);
  }


  return (
    <Form>
      <Top>
        <Title>Generate Image with Prompt</Title>
        <Desc>Write a descriptive prompt to generate an image</Desc>
      </Top>
      <Body>
        <TextInput
          label=" Author Name"
          placeholder="Enter your Name.."
          name="name"
          value={post.name}
          handelChange={(e) => setPost({ ...post, name: e.target.value })}
          
        />
        <TextInput
          label=" Prompt"
          placeholder="An Impressionist oil painting of sunflowers in a purple vase..."
          name="prompt"
          rows={4}
          textArea
          value={post.prompt}
          handelChange={(e) => setPost({ ...post, prompt: e.target.value })}
        />
      </Body>
      <Actions>
        <Button text="Generate Image" leftIcon={<AutoAwesome />} 
        isLoading={GenerateImageLoading}
         isDisabled={post.prompt === ""}
         onClick={()=>HandleGenerateImageLoading()}/>
        <Button
          text="Post Image"
          leftIcon={<CreateRounded />}
          type="secondary"
          isLoading={GeneratePostLoading}
          isDisabled={post.name === "" || post.Url === "" || post.prompt === ""}
          onClick={()=>HandleGeneratePostLoading()}
        />
      </Actions>
    </Form>
  );
};

export default GenerateImageForm;
