import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import type { Conversation, ConversationNote, ConverstationReviewStatus } from '../types';
import { useState } from 'react';
import ConversationMessages from './ConversationMessages';
import { ConversationHeader } from './ConversationHeader';
import { ConversationReviewButtons } from './ConversationReviewButtons';
import ConversationNotes from './ConversationNotes';

interface Props {
  conversation: Conversation;
  onNoteAdd: (note: ConversationNote) => void;
  onReviewStatusChange: (status: ConverstationReviewStatus) => void;
}

export function SelectedConversation({ conversation, onReviewStatusChange, onNoteAdd }: Props) {
  const [noteInput, setNoteInput] = useState('');
  const [inputError, setInputError] = useState<string | null>(null);

  function addNote() {
    if (!conversation) return;

    if (noteInput.trim() == '') {
      setInputError('Note cannot be empty!');
      return;
    }

    onNoteAdd({ id: Date.now().toString(), text: noteInput });
    setNoteInput('');
    setInputError(null);
  }

  return (
    <Box>
      <ConversationHeader conversation={conversation} />

      {
        <Box my={2}>
          <ConversationMessages messageList={conversation.messages} />
          <ConversationReviewButtons onReviewStatusChange={onReviewStatusChange} />

          <ConversationNotes
            noteList={conversation.notes}
            onNoteAdd={addNote}
            noteInput={noteInput}
            setNoteInput={setNoteInput}
            inputError={inputError}
          />
        </Box>
      }
    </Box>
  );
}
