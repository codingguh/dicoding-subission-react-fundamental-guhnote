import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Input,  } from "@mantine/core";
import { IconPencilCode } from "@tabler/icons-react";
import { useNotes } from "../../../context/NotesProvider";
import { useState } from "react";
import "../../ui/editor/style.css";
import classes from '../../ui/editor/Demo.module.css';
import { notifications } from "@mantine/notifications";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import { addNote } from "../../../utils/network-data";
import PropTypes from "prop-types";

export function CircularButtonNoteForm({onNoteAdd}) {
  const [opened, { open, close }] = useDisclosure(false);
  // const { addNote } = useNotes();
  // const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const addAndResetNote =async () => {
    // const body = editorRef.current?.root.innerHTML; // Get the HTML content of the editor
    const newNote = await addNote({ title, body });
    setTitle("");
    setBody("")
    close()
    console.log('new note',newNote)
    onNoteAdd(newNote.data)
    return       notifications.show({

      title: 'Success',
      message: 'Success Add Data',
      position:'top-left',
      classNames: classes,
    });
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
    navigate('/')

    addAndResetNote();
    close()
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
            <span style={{ fontSize: "21px" }}>Add New Note</span>
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

      
      <div
        style={{
          position: "sticky",
          bottom: "15px",
          left: "15px",
          float:'right',
          background: "rgb(51, 154, 240)",
          width:'60px',
          height:'60px',
          borderRadius: "50%",
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          fontWeight:'bold',
          color:'white',
          fontSize:21,
          cursor:'pointer'
        }}
        onClick={open}
      >
     
        {/* <AddNewNoteForm /> */}
        <h2>+</h2>
      </div>
     
    </>
  );
}

CircularButtonNoteForm.propTypes = {
  onNote: PropTypes.func.isRequired, 
}