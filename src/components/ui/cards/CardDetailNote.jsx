import { Card, Image, Text, Box,Container, } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CardDetailnote({title,body}) {
  return (
    <Box>
         <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>
      </Card>


      <Container>
    
    <Card  Card shadow="sm" padding="lg" radius="md" withBorder style={{display:'flex',flexDirection:'column',marginTop:'20px',padding:'40px 30px',alignItems:'center',justifyContent:'center'}}>
    <Card.Section  mt="md" mb="xs">
       <Text fw={900} style={{fontSize:'36px'}}>{title}</Text>
       
     </Card.Section>

     <Text size="sm" >
       {body}
     </Text>

     
    
        <Link to="/" style={{marginTop:'33px',display:'flex',fontWeight:'bolder',textDecoration:'none'}}>
        <IconArrowLeft color='teal' stroke={3} style={{marginRight:'6px'}} /> <Text c="teal" style={{textDecoration:'none',fontWeight:'bolder'}} >Book classic tour now</Text>
        </Link>
     
  
  
    </Card>
  </Container>
    </Box>
 
    
  );
}

CardDetailnote.propTypes={
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}
export default CardDetailnote;