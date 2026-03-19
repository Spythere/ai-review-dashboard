import { Box, Typography, Button, Paper, CircularProgress, Stack } from '@mui/material';
import type { ConversationDetails, ConversationListItem, ConverstationReviewStatus } from '../types';
import { useEffect, useState } from 'react';
import { mockConversationDetails } from '../data/mockData';

interface Props {
  conversation: ConversationListItem;
  onReviewStatusChange: (status: ConverstationReviewStatus) => void;
}

export default function ConversationDetails({ conversation, onReviewStatusChange }: Props) {
  const [conversationDetails, setConversationDetails] = useState<ConversationDetails | null>(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [detailsError, setDetailsError] = useState<string | null>(null);

  // Mock fetching conversation details from API
  function fetchConversationDetails() {
    setDetailsLoading(true);
    setTimeout(
      () => {
        const details = mockConversationDetails.find((c) => c.id == conversation.id);

        setConversationDetails(details || null);
        setDetailsLoading(false);
        setDetailsError(details ? null : 'No details found');
      },
      Math.random() * 200 + 100
    );
  }

  useEffect(() => {
    fetchConversationDetails();
  }, [conversation.id]);

  return (
    <Box>
      <Typography variant="h5">{conversation.title}</Typography>
      <Typography>Review Status: {conversation.reviewStatus}</Typography>

      <Box my={2}>
        {detailsLoading && <CircularProgress size={20} />}

        {conversationDetails &&
          conversationDetails.messages.map((m) => (
            <Paper key={m.id} sx={{ p: 2, my: 1 }}>
              {m.content}
            </Paper>
          ))}
      </Box>

      <Stack spacing={2} direction='row'>
        <Button variant="contained" onClick={() => onReviewStatusChange('Approved')}>
          Approve
        </Button>

        <Button variant="contained" onClick={() => onReviewStatusChange('Needs Fix')}>
          Needs Fix
        </Button>
      </Stack>
    </Box>
  );
}
