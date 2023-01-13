import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import StyledDropzone from "../styled_components/StyledDropzone";
import StyledPreviewImage from "../styled_components/StyledPreviewImage";

export function Dropzone({handleDrop, images}) {
  const onDrop = useCallback((acceptedFiles) => {
    handleDrop(acceptedFiles)
  }, [handleDrop])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <StyledDropzone {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
      }
      {images && <StyledPreviewImage src={URL.createObjectURL(images[0])} onLoad={() => { URL.revokeObjectURL(images[0].preview)} }/>}

    </StyledDropzone>
  )
}