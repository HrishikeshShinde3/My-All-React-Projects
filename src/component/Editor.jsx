import React from 'react';
import { useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { Box } from '@mui/material';

const toolbarOptions = [
  ['undo', 'redo'],
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ 'header': 1 }, { 'header': 2 }],
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'script': 'sub' }, { 'script': 'super' }],
  [{ 'indent': '-1' }, { 'indent': '+1' }],
  [{ 'direction': 'rtl' }],
  [{ 'size': ['small', false, 'large', 'huge'] }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  [{ 'color': [] }, { 'background': [] }],
  [{ 'font': [] }],
  [{ 'align': [] }],
  ['clean'],
  ['print'],
  ['check'],
  ['paintformat'],
  ['zoom'],
];



export const Editor = () => {
  useEffect(() => {
    const quillServer = new Quill('#container', {
      theme: 'snow',
      modules: { toolbar: toolbarOptions },
    });


  },[] );

  return (
    <>
      <Box id='container'></Box>
    </>
  );
};
