import { useNotesStore } from '@/app/store';
import { Textarea } from '@headlessui/react';
import { FC } from 'react';

export const AddNote: FC = () => {
  const { addNoteTitle, addNote, setAddNoteTitle } = useNotesStore();
  return (
    <div className="flex items-center rounded-md shadow-md pr-2">
      <Textarea
        // rows={2}
        placeholder="Add a new note"
        className="focus:ring bg-transparent p-2 rounded-md shadow-md flex-1 focus:ring-pink-500 focus:outline-none"
        value={addNoteTitle}
        onChange={(e) => setAddNoteTitle(e.target.value)}
      />
      <button
        className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-md shadow-md ml-2 disabled:bg-pink-300 disabled:text-pink-600 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={!addNoteTitle}
        onClick={addNote}
      >
        Add
      </button>
    </div>
  );
};
