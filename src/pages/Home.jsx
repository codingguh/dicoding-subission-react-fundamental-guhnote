import Hero from "../components/layouts/hero/Hero";
import { TaskCard } from "../components/ui/cards/Card";
import { Grid, Group, TextInput } from "@mantine/core";
import { useNotes } from "../context/NotesProvider";
import EmptyNotes from "../components/layouts/empty/EmptyNotes";
import { AddNewNoteForm } from "../components/layouts/forms/AddNewNoteForm";
import { CircularButtonNoteForm } from "../components/ui/buttons/CircuclarButton";
import useLanguage from "../hooks/useLanguage";
import useInput from "../hooks/useInput";
import { useEffect, useState } from "react";
import { getActiveNotes } from "../utils/network-data";
import { IconSearch } from "@tabler/icons-react";
const Home = () => {
  const [dataNotes, setDataNotes] = useState([]) // all notes from api
  const [initNotes, setInitNotes] = useState(false) // flag sudah ambil notes dari api
  const [loading, setLoading] = useState(true)
  const [notes, setNotes] = useState([]) // filtered notes
  // const { unarchivedNotes } = useNotes();
  const [search, setSearch] = useInput('')
  // const textApp = useLanguage('app')
  // const textNote = useLanguage('note')


  const initNotesFromApi = () => {
    getActiveNotes()
      .then((res) => {
        if (!res.error) {
          setDataNotes(res.data)
          setNotes(res.data)
          setInitNotes(true)
          setLoading(false)
        }
      })
      .catch(() => {
        // alert(textApp.msg.error)
      })
  }

  const handleNoteChange = (noteId) => {
    const updatedNotes = dataNotes.filter((note) => note.id !== noteId);
    setDataNotes(updatedNotes);
    setNotes(updatedNotes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase())));
  };


  const handleNoteAdd = (newNote) => {
    setDataNotes((prevNotes) => [...prevNotes,newNote]);
    setNotes((prevNotes) => [ ...prevNotes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase())),newNote]);
  };


  useEffect(() => {
    if (!initNotes) {
      initNotesFromApi()
    }

    /**
     * Jika sudah init notes
     * filter dari memory local
     */
    if (initNotes) {
      let tempDataNotes = [...dataNotes]
      if (search !== '') {
        tempDataNotes = tempDataNotes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()))
      }
      setNotes(tempDataNotes)
    }
    
  }, [search])
  return (
    <div style={{ marginLeft: "5%", marginRight: "5%" }}>
       
       <Group style={{padding:'20px 00px 20px 0px'}} justify="space-between" >
      <div></div>
      <Group>
      <IconSearch stroke={2} />
      <TextInput
      variant="unstyled"
      size="md"
      placeholder="Search By title ..."
      value={search}
          onChange={setSearch}
    />
     </Group>
    </Group>
  
      
      {/* <Hero title="Note List" amount={notes.length} /> */}
      <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}>
        {notes.length > 0 ? (
          notes.map((note) => (
            <Grid.Col
              key={note.id}
              span={{ base: 12, lg: 3, md: 4, sm: 6, xs: 12 }}
            >
              <TaskCard {...note} onNoteChange={handleNoteChange}/>
            </Grid.Col>
          ))
        ) : (
          <EmptyNotes description="List of unarchived notes is empty" />
        )}
      </Grid>
      <CircularButtonNoteForm onNoteAdd={handleNoteAdd} />
      
    </div>
  );
}

export default Home;
