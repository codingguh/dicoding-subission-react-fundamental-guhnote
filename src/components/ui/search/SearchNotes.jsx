import { Group, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { useNotes } from '../../../context/NotesProvider'
import { useNavigate } from 'react-router-dom'

const SearchNotes = () => {
  const navigate = useNavigate();
  const {onKeywordChange}=useNotes();


  const handleSearch = (e) => {
    const searchKeyword = e.target.value

    if (!searchKeyword) {
      onKeywordChange('')
      navigate('/')
      return
    }

    onKeywordChange(searchKeyword)
  }

  return (
    <Group>
      <IconSearch stroke={2} />
      <TextInput
      variant="unstyled"
      size="md"
      placeholder="Search By title ..."
      onChange={(e) => handleSearch(e)}
    />
     </Group>
  )
}

export default SearchNotes
