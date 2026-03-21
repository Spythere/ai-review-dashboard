import { Box, Paper, Typography } from '@mui/material';
import type { ConversationMessage } from '../types';

interface Props {
  messageList: ConversationMessage[];
}

function humanizeTimestamp(timestamp: number) {
  return new Date(timestamp).toLocaleString('en-US', {
    dateStyle: 'short',
    timeStyle: 'short'
  });
}

export default function ConversationMessages({ messageList }: Props) {
  return (
    <Box>
      <Typography variant="h5">Conversation</Typography>

      <Box my={2} width={'100%'} maxWidth={500} maxHeight={500} overflow={'auto'}>
        <Paper sx={{ p: 1 }}>
          {messageList.map((msg, i) => (
            <Box
              mt={i == 0 ? 0 : 1}
              key={i}
              sx={{
                display: 'flex',
                justifyContent: msg.sender === 'Customer' ? 'flex-end' : 'flex-start'
              }}
            >
              <Box maxWidth="50%">
                <Typography variant="body2" align={msg.sender === 'Customer' ? 'right' : 'left'}>
                  {msg.sender} &bull; {humanizeTimestamp(msg.timestamp)}
                </Typography>

                <Paper
                  sx={{
                    p: 1,
                    bgcolor: msg.sender === 'Customer' ? 'primary.main' : 'grey.200',
                    color: msg.sender === 'Customer' ? 'primary.contrastText' : 'black'
                  }}
                >
                  <Typography variant="body2">{msg.content}</Typography>
                </Paper>
              </Box>
            </Box>
          ))}
        </Paper>
      </Box>
    </Box>
  );
}
