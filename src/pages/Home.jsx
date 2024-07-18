import Hero from "../components/layouts/hero/Hero";
import { TaskCard } from "../components/ui/cards/Card";
import { Grid } from "@mantine/core";
import { useNotes } from "../context/NotesProvider";
import EmptyNotes from "../components/layouts/empty/EmptyNotes";
const Home = () => {
  const { unarchivedNotes } = useNotes();
  return (
    <div style={{ marginLeft: "5%", marginRight: "5%" }}>
      <Hero  title='Note List' amount={unarchivedNotes.length}/>
      <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}>
        {unarchivedNotes.length > 0 ? (
          unarchivedNotes.map((note) => (
            <Grid.Col
              key={note.id}
              span={{ base: 12, lg: 3, md: 4, sm: 6, xs: 12 }}
            >
              <TaskCard {...note} />
            </Grid.Col>
          ))
        ) : (
          <EmptyNotes description="List of unarchived notes is empty" />
        )}
      </Grid>
    </div>
  );
};

export default Home;
