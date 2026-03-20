import { Box, Divider, Paper, Typography } from '@mui/material';
import type { Conversation } from '../types';
import { ReviewStatusChip } from './ReviewStatusChip';

interface Props {
  conversation: Conversation;
}

export function ConversationHeader({ conversation }: Props) {
  return (
    <Paper>
      <Box p={1}>
        <Typography variant="h5" fontWeight="bold">
          {conversation.title}
        </Typography>
        <Typography variant="subtitle1">Category: {conversation.category}</Typography>
        <Divider sx={{ my: 1 }}></Divider>
        <ReviewStatusChip reviewStatus={conversation.reviewStatus} />
      </Box>
    </Paper>
  );
}
