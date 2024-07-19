import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Input,  } from "@mantine/core";
import { IconPencilCode } from "@tabler/icons-react";
// import QuillEditor from "../../ui/editor/QuillEditor";
import { useNotes } from "../../../context/NotesProvider";
import { useState } from "react";
import "../../ui/editor/style.css";
import classes from '../../ui/editor/Demo.module.css';
import { notifications } from "@mantine/notifications";
import "react-quill/dist/quill.snow.css";
// import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import { modals } from '@mantine/modals';
// import 'react-quill/dist/quill.snow.css';
export function AddNewNoteForm() {
  const [opened, { open, close }] = useDisclosure(false);
  const { addNote } = useNotes();
  // const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addAndResetNote = () => {
    // const body = editorRef.current?.root.innerHTML; // Get the HTML content of the editor
    addNote(title, body);
    setTitle("");
    setBody("")
    close()
    // if (editorRef.current) {
    //   editorRef.current.setContents(""); // Reset the editor content
    // }
  };

  const handleAddNote = (e) => {
    e.preventDefault();
// console.log('sdasda')
    if (!title || !body) {
      console.log("KOSONNGOFAS");
      return       notifications.show({
        color: 'red',
        title: 'Error',
        message: 'Title and body must be filled',
        position:'top-left',
        classNames: classes,
      });
      // return showToast('error', 'Title and body cannot be empty')
    }
    console.log("sdasdas");

    addAndResetNote();
  
  };

  // console.log(title)

  return (
    <>
      <Modal
        size="lg"
        opened={opened}
        onClose={close}
        title={
          <div style={{ fontWeight: "bold" }}>
            <IconPencilCode style={{ marginRight: "6px" }} />
            <span style={{ fontSize: "21px" }}>New Note</span>
          </div>
        }
        centered
      >
        <form >
          <Input
            variant="unstyled"
            placeholder="Enter Title Here"
            inputSize="lg"
            size="lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <ReactQuill theme="snow" value={body} onChange={setBody} />
          {/* <Input
             variant="unstyled"
             placeholder="Enter Title Here"
             inputSize="lg"
             size="lg"
            value={body}
            onChange={(e) => setBody(e.target.value)}
           
          /> */}
          <Button fullWidth onClick={handleAddNote}>
            Submit
          </Button>
        </form>
      </Modal>

      <Button variant="outline" color="cyan" onClick={open}>
        <IconPencilCode style={{ marginRight: "3px" }} /> New Note
      </Button>
    </>
  );
}
