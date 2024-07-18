import Hero from '../components/layouts/hero/Hero';
import { TaskCard } from '../components/ui/cards/Card';
import {   Grid } from '@mantine/core';
const Home = () => {
  return (
    <div style={{marginLeft:'5%',marginRight:'5%'}}>
        <Hero/>
      <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
          <Grid.Col span={{ base: 12, lg:3 ,md:4,sm:6,xs: 12,}}>
          <TaskCard/>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg:3,md:4,sm:6,xs: 12, }}>
          <TaskCard/>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg:3 ,md:4,sm:6,xs: 12,}}>
          <TaskCard/>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg:3,md:4,sm:6,xs: 12, }}>
          <TaskCard/>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg:3 ,md:4,sm:6,xs: 12,}}>
          <TaskCard/>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg:3,md:4,sm:6,xs: 12, }}>
          <TaskCard/>
          </Grid.Col>
        </Grid>
      </div>
  )
}

export default Home
