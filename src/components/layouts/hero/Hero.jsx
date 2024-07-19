import { Group} from "@mantine/core"
import SearchNotes from "../../ui/search/SearchNotes";
import PropTypes from 'prop-types';

const Hero = ({title,amount}) => {
  return (
    <Group style={{padding:'20px 00px 20px 0px'}} justify="space-between" >
      <div>
      <h4 style={{fontSize:'17px'}}>{title}{' '}<span style={{fontSize:'21px',fontWeight:'bold'}}>({amount})</span></h4>
      </div>
      <SearchNotes/>
    </Group>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
};

export default Hero
