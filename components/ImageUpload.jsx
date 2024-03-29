import StyledForm from "../styled_components/StyledForm";
import StyledInput from "../styled_components/StyledInput";
import StyledLabel from "../styled_components/StyledLabel";
import {Dropzone} from "./Dropzone";
import {useState} from "react";
import StyledButton from "../styled_components/StyledButton";


export function ImageUpload({handleAsset}) {
  const [images, setImages] = useState(null);

  function handleUpload(tags, image) {
    const data = new FormData();
    data.append('file', image)
    data.append('upload_preset', 'gallery')
    data.append('cloud_name', 'codeandcats')
    data.append("tags", tags)
    fetch('https://api.cloudinary.com/v1_1/codeandcats/image/upload', {method: 'POST', body: data})
      .then(res => res.json())
      .then(data => {
        handleAsset(data)
        setImages(undefined)
      })
      .catch(err => console.error(err));
  }

  function handleSubmit(event) {
    event.preventDefault()
    const tags = event.target.tags.value.toLowerCase().split(',')
    handleUpload(tags, images[0])
    event.target.reset()


  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Dropzone handleDrop={setImages} images={images}/>
      <StyledLabel>
        <StyledInput name='tags' type='text' placeholder='Add some tags separated by comma' required />
      </StyledLabel>
      <StyledButton type='submit'>
        <span>
          Upload
        </span>
      </StyledButton>
    </StyledForm>
  )
}