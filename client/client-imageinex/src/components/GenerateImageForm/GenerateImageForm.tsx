// import { Form } from "react-router-dom";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import Styled from "styled-components";
import { AutoAwesome, CreateRounded } from "@mui/icons-material";
import {  GeneratePhoto, CreatePost } from "../../api/index";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = Styled.div` 
flex: 1;
padding: 0.2rem 0.2rem;
display: flex;
flex-direction: column;
gap: 1.5rem;
justify-content: center;

@media (min-width: 426px) {
    padding: 1rem 2rem;
  }
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
  photo: string;
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
  const navigation =useNavigate();
  const [error,setError] = useState<string>("");
  
  const  HandleGenerateImageLoading = async()=>{
    
    setGenerateImageLoading(true);
    console.log("calling Prompt:", post.prompt);
    await GeneratePhoto({ prompt: post.prompt }).then((res)=>{
      setPost({...post, photo: res?.data?.photo});
      setGenerateImageLoading(false);

  }).catch((err)=>{
    console.log(err);
    setError(err?.response?.data?.message || "Something went wrong");
    setGenerateImageLoading(false);
    
  });

  }
  const HandleGeneratePostLoading = async()=>{    
    setGeneratePostLoading(true);
    await CreatePost(post).then(()=>{
      setGeneratePostLoading(false);
      navigation("/");
    }).catch((err)=>{
      console.log(err);
      setError(err?.response?.data?.message || "Something went wrong");
      setGeneratePostLoading(false);
      
    });
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
      {error && <p style={{color:'red'}}>{error}</p>}
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
          isDisabled={post.name === "" || post.photo === "" || post.prompt === ""}
          onClick={()=>HandleGeneratePostLoading()}
        />
      </Actions>
    </Form>
  );
};

export default GenerateImageForm;
