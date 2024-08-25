import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Input } from "@mantine/core";
import { IconPencilCode } from "@tabler/icons-react";
import { useState } from "react";
import "../../ui/editor/style.css";
import classes from "../../ui/editor/Demo.module.css";
import { notifications } from "@mantine/notifications";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import { addNote } from "../../../utils/network-data";
import PropTypes from "prop-types";

export function CircularButtonNoteForm({ onNoteAdd }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const addAndResetNote = async () => {
    const newNote = await addNote({ title, body });
    setTitle("");
    setBody("");
    close();
    console.log("new note", newNote);
    onNoteAdd(newNote.data);
    notifications.show({
      title: "Success",
      message: "Success Add Data",
      position: "top-left",
      classNames: classes,
    });
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!title || !body) {
      console.log("Title or body is empty");
      notifications.show({
        color: "red",
        title: "Error",
        message: "Title and body must be filled",
        position: "top-left",
        classNames: classes,
      });
      return;
    }
    addAndResetNote();
    navigate("/");
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
            <span style={{ fontSize: "21px" }}>Add New Note</span>
          </div>
        }
        centered
      >
        <form onSubmit={handleAddNote}>
          <Input
            variant="unstyled"
            placeholder="Enter Title Here"
            size="lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <ReactQuill theme="snow" value={body} onChange={setBody} />
          <Button type="submit" fullWidth>
            Submit
          </Button>
        </form>
      </Modal>

      <div
        style={{
          position: "fixed",
          bottom: "15px",
          right: "15px",
          background: "rgb(51, 154, 240)",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          color: "white",
          fontSize: 21,
          cursor: "pointer",
        }}
        onClick={open}
      >
        <h2>+</h2>
      </div>
    </>
  );
}

CircularButtonNoteForm.propTypes = {
  onNoteAdd: PropTypes.func.isRequired, // Corrected prop name
};
