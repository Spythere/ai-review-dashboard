import { Box, Paper } from '@mui/material';
import type { ConversationMessage } from '../types';

interface Props {
  messageList: ConversationMessage[];
}

export default function ConversationMessages({ messageList }: Props) {
  return (
    <Box>
      <Box my={2}>
        {messageList.map((m) => (
          <Paper key={m.id} sx={{ p: 2, my: 1 }}>
            {m.content}
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
