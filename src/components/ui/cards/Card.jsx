import {
    Card,
    Text,
    Group,
    ActionIcon,
    Button,
  } from "@mantine/core"
  import { IconCalendar,IconArchive, IconPencilMinus, IconTrash,  } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import { modals } from '@mantine/modals';
import { useNotes } from "../../../context/NotesProvider";
import { notifications } from "@mantine/notifications";
import { showDate } from "../../../utils/timeFormat";
import styles from './card.module.css';
import parse from 'html-react-parser';
  
  export function TaskCard({ id, title, body, createdAt, archived }) {
    const { deleteNote,archiveNote } = useNotes()
    const openModal = () => modals.openConfirmModal({
      title: 'Delete Notes',
      centered:true,
      children: (
        <Text size="sm" >
          Are you sure?, Do you want to delete this note.
        </Text>
      ),
      labels: { confirm: 'Delete account', cancel: "No don't delete it" },
      confirmProps: { color: 'red' },
      
      onCancel: () => console.log('Cancel'),
      onConfirm: ()=>{
        deleteNote(id);
        notifications.show({
        title: 'Success Delete data',
        message: 'this data has been removed',
        position:'top-left'
      })
    },
      // onDelete={() => deleteNote(id)}
    });

    const archivingNote=(id)=>{
      archiveNote(id);
      notifications.show({
        title: 'Success Archiving',
        message: 'You are successfull arching this data',
        position:'top-left'
        // posi
        // classNames: classes,
      })
    }
    return (
      <Card withBorder padding="lg" radius="md" style={{marginBottom:'9px'}}>
        <Text fz="lg" fw={550} mt="md">
          <Link to={`/detail/${id}`} >
          {title}
          </Link>
        </Text>
  
       
        <Text fz="sm" c="dimmed" mt={5} className={styles.cardEllipsis}>
         {parse(body)}
        </Text>
        
        <Text  size="xs" mt="md" style={{color:'grey'}}>
          <IconCalendar size="0.8rem" style={{marginRight:'3px'}} />
          {showDate(createdAt)}
         {archived?'aaa':'bb'}
        </Text>
  
        {/* <Progress value={(23 / 36) * 100} mt={5} /> */}
  
        <Group justify="space-between" mt="md">
        <Group gap='xs'>
        <Button variant="outline" color="teal" size="xs" radius='md' >
            <IconPencilMinus size="1rem" />
            
          </Button>
          <Button variant="light" size="sm" radius="md" onClick={() => archivingNote(id)}>
            <IconArchive size="1.1rem" style={{marginRight:'3'}} />
            Archive
          </Button>
        </Group>
          <ActionIcon 
           onClick={() =>openModal()
            // notifications.show({
            //   title: 'Default notification',
            //   message: 'Hey there, your code is awesome! 🤥',
            // })
          // }
          
           }
          
          variant="light" color="red" size="lg" radius="md">
            <IconTrash size="1.1rem" />
          </ActionIcon>
        </Group>
      </Card>
    )
  }
  

  TaskCard.propTypes={
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  }