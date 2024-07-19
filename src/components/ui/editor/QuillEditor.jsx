import  { useState } from 'react';
import './style.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillEditor= () => {
  const [value, setValue] = useState('');
console.log('value',value)
  return (
    <ReactQuill theme="snow" value={value} onChange={setValue} />
  );
};

export default QuillEditor;