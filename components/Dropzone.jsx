import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import StyledDropzone from "../styled_components/StyledDropzone";

export function Dropzone({handleDrop, images}) {
  const onDrop = useCallback(acceptedFiles => {
    handleDrop(acceptedFiles)
  }, [handleDrop])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <StyledDropzone {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </StyledDropzone>
  )
}