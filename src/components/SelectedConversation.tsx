import { Box, CircularProgress, Grid, Stack, Typography } from '@mui/material';
import type { ConversationDetails, ConversationListItem, ConversationNote, ConverstationReviewStatus } from '../types';
import { useEffect, useState } from 'react';
import { mockConversationDetails } from '../data/mockData';
import ConversationMessages from './ConversationMessages';
import { ConversationHeader } from './ConversationHeader';
import { ConversationReviewButtons } from './ConversationReviewButtons';
import ConversationNotes from './ConversationNotes';

interface Props {
  conversation: ConversationListItem;
  onReviewStatusChange: (status: ConverstationReviewStatus) => void;
}

export function SelectedConversation({ conversation, onReviewStatusChange }: Props) {
  const [conversationDetails, setConversationDetails] = useState<ConversationDetails | null>(null);

  const [detailsLoading, setDetailsLoading] = useState(false);
  const [detailsError, setDetailsError] = useState<string | null>(null);

  const [noteInput, setNoteInput] = useState('');
  const [inputError, setInputError] = useState<string | null>(null);

  useEffect(() => {
    fetchConversationDetails();
  }, [conversation.id]);

  // Mock fetching conversation details from API
  function fetchConversationDetails() {
    setDetailsLoading(true);
    setConversationDetails(null);
    setDetailsError(null);

    setTimeout(
      () => {
        try {
          const details = mockConversationDetails.find((c) => c.id == conversation.id);
          setConversationDetails(details || null);
        } catch (error) {
          setDetailsError('Failed to load conversation details');
        } finally {
          setDetailsLoading(false);
        }
      },
      Math.random() * 200 + 100
    );
  }

  function addNote() {
    if (!conversationDetails) return;

    if (noteInput.trim() == '') {
      setInputError('Note cannot be empty!');
      return;
    }

    const newNotes: ConversationNote[] = [...conversationDetails.notes, { id: Date.now().toString(), text: noteInput }];

    setInputError(null);
    setConversationDetails({
      ...conversationDetails,
      notes: newNotes
    });
  }

  return (
    <Box>
      <ConversationHeader conversation={conversation} />

      {detailsLoading && <CircularProgress size={20} />}
      {detailsError && <Typography color="error">{detailsError}</Typography>}

      {conversationDetails && (
        <Grid container spacing={2} my={2}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <ConversationMessages messageList={conversationDetails.messages} />
            <ConversationReviewButtons onReviewStatusChange={onReviewStatusChange} />
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            <ConversationNotes
              noteList={conversationDetails.notes}
              onNoteAdd={addNote}
              noteInput={noteInput}
              setNoteInput={setNoteInput}
              inputError={inputError}
            />
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
