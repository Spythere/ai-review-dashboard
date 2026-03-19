import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import type { ConversationListItem } from '../types';

interface Props {
  conversationList: ConversationListItem[];
  onSelect: (item: ConversationListItem) => void;
}

export default function Sidebar({ conversationList, onSelect }: Props) {
  return (
    <Box width={350} p={2} bgcolor="#2b2b2b" color="white">
      <Typography variant="h6">Conversations</Typography>
      <List>
        {conversationList.map((c) => (
          <ListItem key={c.id} onClick={() => onSelect(c)} sx={{ cursor: 'pointer' }}>
            <ListItemText
              primary={
                <Typography color="white" fontWeight="bold">
                  {c.title}
                </Typography>
              }
              secondary={<Typography color="gold">{c.reviewStatus}</Typography>}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
