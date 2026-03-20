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
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [detailsError, setDetailsError] = useState<string | null>(null);

  const [noteInput, setNoteInput] = useState('');
  const [inputError, setInputError] = useState<string | null>(null);

  // useEffect(() => {
  //   fetchConversationDetails();
  // }, [conversation.id]);

  // Mock fetching conversation details from API
  // function fetchConversationDetails() {
  //   setDetailsLoading(true);
  //   setConversationDetails(null);
  //   setDetailsError(null);

  //   setTimeout(
  //     () => {
  //       try {
  //         const details = mockConversationDetails.find((c) => c.id == conversation.id);
  //         setConversationDetails(details || null);
  //       } catch (error) {
  //         setDetailsError('Failed to load conversation details');
  //       } finally {
  //         setDetailsLoading(false);
  //       }
  //     },
  //     Math.random() * 200 + 100
  //   );
  // }

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

      {detailsLoading && <CircularProgress size={20} />}
      {detailsError && <Typography color="error">{detailsError}</Typography>}

      {
        <Grid container spacing={2} my={2}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <ConversationMessages messageList={conversation.messages} />
            <ConversationReviewButtons onReviewStatusChange={onReviewStatusChange} />
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            <ConversationNotes
              noteList={conversation.notes}
              onNoteAdd={addNote}
              noteInput={noteInput}
              setNoteInput={setNoteInput}
              inputError={inputError}
            />
          </Grid>
        </Grid>
      }
    </Box>
  );
}
