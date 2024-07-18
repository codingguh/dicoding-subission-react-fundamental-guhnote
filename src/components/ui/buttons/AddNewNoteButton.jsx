import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Input } from '@mantine/core';
import { IconPencilCode } from '@tabler/icons-react';
import QuillEditor from '../editor/QuillEditor';
// import { RichTextEditor } from '@mantine/rte';


export function AddNewNoteButton() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal size='lg' opened={opened} onClose={close} title="Authentication" centered>
         <Input variant="unstyled" placeholder="Enter Title Here" inputSize='lg' size='lg'/>;
        <QuillEditor/>
      </Modal>
      <Button variant="outline" color="cyan" onClick={open}><IconPencilCode style={{marginRight:'3px'}}/> New Note</Button>
    </>
  );
}