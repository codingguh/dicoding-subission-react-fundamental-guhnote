/* eslint-disable react-refresh/only-export-components */

import { useSearchParams } from 'react-router-dom';
import { createContext, useState, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { listNote } from '../data/notes';

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsKeyword = searchParams.get('keyword');

  const [notes, setNotes] = useState(listNote);
  const [keyword, setKeyword] = useState(searchParamsKeyword || '');

  const onKeywordChange = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const archivedNotes = filteredNotes.filter((note) => note.archived);
  const unarchivedNotes = filteredNotes.filter((note) => !note.archived);

  const getNoteById = (id) => notes.find((note) => note.id === id);

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const addNote = (title, body) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: new Date().toString(),
        title: title || '',
        body: body || '',
        createdAt: new Date().toISOString(),
        archived: false,
      },
    ]);
  };

  const editNote = (id, title, body) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? { ...note, title, body } : note))
    );
  };

  const archiveNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const contextValue = useMemo(() => {
    return {
      notes,
      archivedNotes,
      unarchivedNotes,
      setNotes,
      deleteNote,
      addNote,
      editNote,
      getNoteById,
      archiveNote,
      onKeywordChange,
      keyword,
    };
  }, [notes, archivedNotes, unarchivedNotes, getNoteById, onKeywordChange, keyword]);

  return (
    <NotesContext.Provider value={contextValue}>
      {children}
    </NotesContext.Provider>
  );
};

NotesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useNotes = () => {
  const context = useContext(NotesContext);

  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }

  return context;
};