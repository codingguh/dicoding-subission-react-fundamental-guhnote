import { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Import Quill styles
import './style.css'; // Import your custom CSS

const Editor = forwardRef(
  ({ readOnly, defaultValue, onTextChange, onSelectionChange, placeholder }, ref) => {
    const containerRef = useRef(null);
    const defaultValueRef = useRef(defaultValue);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);

    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange;
      onSelectionChangeRef.current = onSelectionChange;
    });

    useEffect(() => {
      ref.current?.enable(!readOnly);
    }, [ref, readOnly]);

    useEffect(() => {
      const container = containerRef.current;
      const editorContainer = container.appendChild(
        container.ownerDocument.createElement('div'),
      );
      editorContainer.classList.add('editor-container'); // Add the class here

      const quill = new Quill(editorContainer, {
        theme: 'snow',
        placeholder: placeholder, // Set the placeholder here
      });

      ref.current = quill;

      if (defaultValueRef.current) {
        quill.setContents(defaultValueRef.current);
      }

      quill.on(Quill.events.TEXT_CHANGE, (...args) => {
        onTextChangeRef.current?.(...args);
      });

      quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
        onSelectionChangeRef.current?.(...args);
      });

      return () => {
        ref.current = null;
        container.innerHTML = '';
      };
    }, [ref, placeholder]);

    return <div ref={containerRef}></div>;
  },
);

Editor.displayName = 'Editor';

Editor.propTypes = {
  readOnly: PropTypes.bool,
  defaultValue: PropTypes.object,
  onTextChange: PropTypes.func,
  onSelectionChange: PropTypes.func,
  placeholder: PropTypes.string, // Add the prop type for placeholder
};

export default Editor;
