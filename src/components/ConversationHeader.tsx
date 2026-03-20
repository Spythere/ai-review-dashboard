import { Box, Typography } from '@mui/material';
import type { ConversationListItem } from '../types';

interface Props {
  conversation: ConversationListItem;
}

export function ConversationHeader({ conversation }: Props) {
  return (
    <Box>
      <Typography variant="h5">{conversation.title}</Typography>
      <Typography>Review Status: {conversation.reviewStatus}</Typography>
    </Box>
  );
}
