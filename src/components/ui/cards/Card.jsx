import {
    Card,
    Text,
    Group,
    ActionIcon,
    Button
  } from "@mantine/core"
  import { IconCalendar,IconArchive, IconPencilMinus, IconTrash,  } from "@tabler/icons-react"
 
  
  export function TaskCard() {
    return (
      <Card withBorder padding="lg" radius="md">
        <Text fz="lg" fw={550} mt="md">
          5.3 minor release (September 2022)
        </Text>
  
       
        <Text fz="sm" c="dimmed" mt={5}>
          Form context management, Switch, Grid and Indicator components
          improvements, new hook and 10+ other changes
        </Text>
        
        <Text  size="xs" mt="md" style={{color:'grey'}}>
          <IconCalendar size="0.8rem" style={{marginRight:'3px'}} />
          21 Maret 1997
         
        </Text>
  
        {/* <Progress value={(23 / 36) * 100} mt={5} /> */}
  
        <Group justify="space-between" mt="md">
        <Group gap='xs'>
        <Button variant="outline" color="teal" size="xs" radius='md' >
            <IconPencilMinus size="1rem" />
            
          </Button>
          <Button variant="light" size="sm" radius="md">
            <IconArchive size="1.1rem" style={{marginRight:'3'}}/>
            Archive
          </Button>
        </Group>
          <ActionIcon variant="light" color="red" size="lg" radius="md">
            <IconTrash size="1.1rem" />
          </ActionIcon>
        </Group>
      </Card>
    )
  }
  