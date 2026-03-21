import { Box, Divider, Paper, Stack, Typography } from '@mui/material';
import type { Conversation } from '../types';
import { ReviewStatusChip } from './ReviewStatusChip';
import { CustomerWeather } from './CustomerWeather';

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

        <Divider />

        <Stack direction="row" gap={1}>
          <Typography variant="subtitle2">City: {conversation.city}</Typography>
          //
          <CustomerWeather city={conversation.city} />
        </Stack>

        <Divider />

        <ReviewStatusChip reviewStatus={conversation.reviewStatus} />
      </Box>
    </Paper>
  );
}
