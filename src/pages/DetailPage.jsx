import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useNotes } from '../context/NotesProvider';
import CardDetailnote from '../components/ui/cards/CardDetailNote';

function DetailPageWrapper() {
    const { getNoteById } = useNotes()
    console.log()
  const { id } = useParams();
  return <DetailPage getNote={getNoteById(id)} id={Number(id)} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: props.getNote
    };
  }

  render() {
    if (this.state.note === null) {
      return <p>Movie is not found!</p>;
    }

    return (
      <section>
        <CardDetailnote {...this.state.note}/>
      </section>
    );
  }
}
DetailPage.propTypes = {
    getNote: PropTypes.object,
  };
// export default DetailPage;
export default DetailPageWrapper;