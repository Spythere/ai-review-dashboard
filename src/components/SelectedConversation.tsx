import { Box, CircularProgress, Typography } from '@mui/material';
import type { ConversationDetails, ConversationListItem, ConverstationReviewStatus } from '../types';
import { useEffect, useState } from 'react';
import { mockConversationDetails } from '../data/mockData';
import ConversationMessages from './ConversationMessages';
import { ConversationHeader } from './ConversationHeader';
import { ConversationReviewButtons } from './ConversationReviewButtons';

interface Props {
  conversation: ConversationListItem;
  onReviewStatusChange: (status: ConverstationReviewStatus) => void;
}

export function SelectedConversation({ conversation, onReviewStatusChange }: Props) {
  const [conversationDetails, setConversationDetails] = useState<ConversationDetails | null>(null);

  const [detailsLoading, setDetailsLoading] = useState(false);
  const [detailsError, setDetailsError] = useState<string | null>(null);

  useEffect(() => {
    fetchConversationDetails();
  }, [conversation.id]);

  // Mock fetching conversation details from API
  function fetchConversationDetails() {
    setDetailsLoading(true);
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

  return (
    <Box>
      <ConversationHeader conversation={conversation} />

      {detailsLoading && <CircularProgress size={20} />}
      {detailsError && <Typography color="error">{detailsError}</Typography>}

      {conversationDetails && (
        <Box>
          <ConversationMessages messageList={conversationDetails.messages} />
          <ConversationReviewButtons onReviewStatusChange={onReviewStatusChange} />
        </Box>
      )}
    </Box>
  );
}
