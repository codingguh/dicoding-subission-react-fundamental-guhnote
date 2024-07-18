import { Group, TextInput } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"

const Hero = () => {
  return (
    <Group style={{padding:'20px 00px 20px 0px'}} justify="space-between" >
      <div>
      <h4 style={{fontSize:'17px'}}>Note Lists{' '}<span style={{fontSize:'21px',fontWeight:'bold'}}>(4)</span></h4>
      </div>
      <Group>
      <IconSearch stroke={2} />
      <TextInput
      variant="unstyled"
      size="md"
      placeholder="Search By title ..."
    />
     </Group>
    </Group>
  )
}

export default Hero
