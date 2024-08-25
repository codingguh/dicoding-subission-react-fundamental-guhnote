import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import CardDetailNote from '../components/ui/cards/CardDetailNote';
import { getNote } from '../utils/network-data';

function DetailPageWrapper() {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await getNote(id);
        if (!res.error) {
          setNote(res.data);
        } else {
          alert('Note not found');
        }
      } catch {
        alert('An error occurred while fetching the note');
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <DetailPage note={note} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: props.note,
    };
  }

  render() {
    const { note } = this.state;

    if (!note) {
      return <p>Note is not found!</p>;
    }

    return (
      <section>
        <CardDetailNote {...note} />
      </section>
    );
  }
}

DetailPage.propTypes = {
  note: PropTypes.object,
};

export default DetailPageWrapper;