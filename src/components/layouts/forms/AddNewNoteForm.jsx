import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Input } from "@mantine/core";
import { IconPencilCode } from "@tabler/icons-react";
import QuillEditor from "../../ui/editor/QuillEditor";
import { useNotes } from '../../../context/NotesProvider';
import { useState, useRef } from 'react';

export function AddNewNoteForm() {
  const [opened, { open, close }] = useDisclosure(false);
  const { addNote } = useNotes();

  const [title, setTitle] = useState('');
  const editorRef = useRef(null);

  const addAndResetNote = () => {
    const body = editorRef.current?.root.innerHTML; // Get the HTML content of the editor
    addNote(title, body);
    setTitle('');
    if (editorRef.current) {
      editorRef.current.setContents(''); // Reset the editor content
    }
  };

  const handleAddNote = (e) => {
    e.preventDefault();

    if (!title || !editorRef.current.getText().trim()) {
      // Title and body cannot be empty
      console.log('kosong');
      return;
    }

    addAndResetNote();
    // Show success message or navigate
  };

  return (
    <>
      <Modal
        size="lg"
        opened={opened}
        onClose={close}
        title={
          <div style={{ fontWeight: "bold" }}>
            <IconPencilCode style={{ marginRight: "6px" }} />
            <span style={{ fontSize: '21px' }}>New Note</span>
          </div>
        }
        centered
      >
        <Input
          variant="unstyled"
          placeholder="Enter Title Here"
          inputSize="lg"
          size="lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <QuillEditor ref={editorRef} placeholder="Enter note here..." />
        <Button fullWidth onClick={handleAddNote}>Submit</Button>
      </Modal>
      <Button variant="outline" color="cyan" onClick={open}>
        <IconPencilCode style={{ marginRight: "3px" }} /> New Note
      </Button>
    </>
  );
}
