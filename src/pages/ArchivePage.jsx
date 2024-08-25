import Hero from "../components/layouts/hero/Hero";
import { TaskCard } from "../components/ui/cards/Card";
import { Grid } from "@mantine/core";
import { useNotes } from "../context/NotesProvider";
import EmptyNotes from "../components/layouts/empty/EmptyNotes";
import { useEffect, useState } from "react";
import { getArchivedNotes } from "../utils/network-data";
import useInput from "../hooks/useInput";
const ArchivePage = () => {
  const [dataNotes, setDataNotes] = useState([]) // all notes from api
  const [initNotes, setInitNotes] = useState(false) // flag sudah ambil notes dari api
  const [loading, setLoading] = useState(true)
  const [notes, setNotes] = useState([]) // filtered notes
  const [search, setSearch] = useInput('')
  // const text = useLanguage('archive')
  // const textNote = useLanguage('note')
  
  /**
   * Inisialisasi data notes dari api
   */
  const initNotesFromApi = () => {
    getArchivedNotes()
      .then((res) => {
        if (!res.error) {
          setDataNotes(res.data)
          setNotes(res.data)
          setInitNotes(true)
          setLoading(false)
        }
      })
      .catch(() => {
        // alert(appPage[locale].msg.error)
      })
  }

  const handleNoteChange = (noteId) => {
    const updatedNotes = dataNotes.filter((note) => note.id !== noteId);
    setDataNotes(updatedNotes);
    setNotes(updatedNotes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase())));
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
      {/* <Hero title='Archive List' amount={archivedNotes.length} /> */}
      <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}>
        {notes.length > 0 ? (
          notes.map((note) => (
            <Grid.Col
              key={note.id}
              span={{ base: 12, lg: 3, md: 4, sm: 6, xs: 12 }}
            >
              <TaskCard {...note} onNoteChange={handleNoteChange} />
            </Grid.Col>
          ))
        ) : (
          <EmptyNotes description="List of unarchived notes is empty" />
        )}
      </Grid>
    </div>
  );
};

export default ArchivePage;
