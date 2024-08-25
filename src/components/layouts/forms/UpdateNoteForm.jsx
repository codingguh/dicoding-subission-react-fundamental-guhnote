import { Button, Modal,Input } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPencil, IconPencilMinus } from "@tabler/icons-react";
import PropTypes from 'prop-types'
import { useNotes } from "../../../context/NotesProvider";
import ReactQuill from "react-quill";
import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";
import classes from '../../ui/editor/Demo.module.css';
import "react-quill/dist/quill.snow.css";
import { getNote } from "../../../utils/network-data";


const UpdateNoteForm = ({ noteId,title,body }) => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
    const [opened, { open, close }] = useDisclosure(false);
  const { editNote,getNoteById } = useNotes();

  // const initialNote = getNoteById(noteId)

  

  

  const UpdateAndResetNote = () => {
    editNote(noteId, title, body)
    close()
    return       notifications.show({

        title: 'Success',
        message: 'Success Update Data',
        position:'top-left',
        classNames: classes,
      });

  }

  const handleUpdateNote = (e) => {
    e.preventDefault()

    if (!title || !body) {
  return       notifications.show({
        color: 'red',
        title: 'Error',
        message: 'Title and body must be filled',
        position:'top-left',
        classNames: classes,
      });
    //   return showToast('error', 'Title and body cannot be empty')
    }

    UpdateAndResetNote()
    // showToast('success', 'Note updated successfully')
    // onClose()
  }
  return (
    <>
        <Modal
        size="lg"
        opened={opened}
        onClose={close}
        title={
          <div style={{ fontWeight: "bold" }}>
            <IconPencil style={{ marginRight: "6px" }} />
            <span style={{ fontSize: "21px" }}>Edit Note</span>
          </div>
        }
        centered
      >
        <form >
  
         <div>
         <Input
            variant="unstyled"
            placeholder="Enter Title Here"
            inputSize="lg"
            size="lg"
            value={title}
            // onChange={(e) => setTitle(e.target.value)}
          />
          <hr style={{marginBottom:'9px'}}/>
         </div>
          <ReactQuill theme="snow" value={body} 
          // onChange={setBody} 
          
          />
          {/* <Input
             variant="unstyled"
             placeholder="Enter Title Here"
             inputSize="lg"
             size="lg"
            value={body}
            onChange={(e) => setBody(e.target.value)}
           
          /> */}
          <Button fullWidth onClick={handleUpdateNote}>
            EDIT NOTE
          </Button>
        </form>
      </Modal>
      
      <Button variant="outline" color="teal" size="xs" radius="md" onClick={open}>
      <IconPencilMinus size="1rem" />
    </Button>
    </>
   
  );
};

UpdateNoteForm.propTypes = {
    noteId: PropTypes.string,
    title:PropTypes.string,
    body:PropTypes.string,
  }

export default UpdateNoteForm;
