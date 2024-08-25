import { Card, Text, Group, ActionIcon, Button } from "@mantine/core";
import { IconCalendar, IconArchive, IconTrash } from "@tabler/icons-react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { showDate } from "../../../utils/timeFormat";
import styles from "./card.module.css";
import parse from "html-react-parser";
import UpdateNoteForm from "../../layouts/forms/UpdateNoteForm";
import useLanguage from "../../../hooks/useLanguage";
import { deleteNote,archiveNote, unarchiveNote} from "../../../utils/network-data";
export function TaskCard({ id, title, body, createdAt, archived,onNoteChange }) {
  const text = useLanguage('app');
  const navigate = useNavigate()
  
  const openModal = () =>
    modals.openConfirmModal({
      title: `${text.titleDeleteNote}`,
      centered: true,
      children: (
        <Text size="sm">{text.messageDelete}</Text>
      ),
      labels: { confirm: `${text.delete}`, cancel: text.noDelete },
      confirmProps: { color: "red" },

      onCancel: () => console.log("Cancel"),
      onConfirm: () => {
        deleteNote(id);
      
        notifications.show({
          title: "Success Delete data",
          message: "this data has been removed",
          position: "top-left",
        });
        onNoteChange(id); 
      },
      // onDelete={() => deleteNote(id)}
    });

  const archivingNote = (id) => {
    archiveNote(id);
    notifications.show({
      title: "Success Archiving",
      message: "You are successfull arching this data",
      position: "top-left",
    });
    onNoteChange(id); 
  };
  const activateNote = (id) => {
    unarchiveNote(id);
    notifications.show({
      title: "Success Unarchive note",
      message: "You are successfull un archive  this data",
      position: "top-left",
    });
    onNoteChange(id); 
  };
  const location = useLocation();

  const currentPath = location.pathname;
  return (
    <Card withBorder padding="lg" radius="md" style={{ marginBottom: "9px" }}>
      <Text fz="lg" fw={550} mt="md">
        <Link to={`/detail/${id}`}>{title}</Link>
      </Text>

      <Text fz="sm" c="dimmed" mt={5} className={styles.cardEllipsis}>
        {parse(body)}
      </Text>

      <Text size="xs" mt="md" style={{ color: "grey" }}>
        <IconCalendar size="0.8rem" style={{ marginRight: "3px" }} />
        {showDate(createdAt)}
        {archived ? "aaa" : "bb"}
      </Text>

      {/* <Progress value={(23 / 36) * 100} mt={5} /> */}

      <Group justify="space-between" mt="md">
        <Group gap="xs">
          <UpdateNoteForm noteId={id} />
          <Button
            variant="light"
            size="sm"
            radius="md"
            onClick={() =>currentPath==="/archives"?activateNote(id): archivingNote(id)}
          >
            <IconArchive size="1.1rem" style={{ marginRight: "3" }} />
             {currentPath==="/archives"?"Activate":"Archivate"}
          </Button>
        </Group>
        <ActionIcon
          onClick={
            () => openModal()
            // notifications.show({
            //   title: 'Default notification',
            //   message: 'Hey there, your code is awesome! 🤥',
            // })
            // }
          }
          variant="light"
          color="red"
          size="lg"
          radius="md"
        >
          <IconTrash size="1.1rem" />
        </ActionIcon>
      </Group>
    </Card>
  );
}

TaskCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onNoteChange: PropTypes.func.isRequired, 
};
