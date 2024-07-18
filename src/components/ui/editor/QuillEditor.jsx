import  { useRef } from 'react';
import Editor from './Editor'; // Adjust the import path as necessary
import './style.css';

const QuillEditor= () => {
  const editorRef = useRef(null);

  const handleTextChange = (delta, oldDelta, source) => {
    console.log('Text change:', delta, oldDelta, source);
  };

  const handleSelectionChange = (range, oldRange, source) => {
    console.log('Selection change:', range, oldRange, source);
  };

  return (
   
      <Editor
      
        ref={editorRef}
        readOnly={false}
        defaultValue={{ ops: [{ insert: 'Type your content here .....\n' }] }}
        onTextChange={handleTextChange}
        onSelectionChange={handleSelectionChange}
      />
   
  );
};

export default QuillEditor;