import { Group, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'


const SearchNotes = () => {
  return (
    <Group>
      <IconSearch stroke={2} />
      <TextInput
      variant="unstyled"
      size="md"
      placeholder="Search By title ..."
    />
     </Group>
  )
}

export default SearchNotes
