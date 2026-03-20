import { Box, Typography, List, ListItem, ListItemText, colors, Divider, ListItemButton, Paper } from '@mui/material';
import type { Conversation } from '../types';
import { ReviewStatusChip } from './ReviewStatusChip';

interface Props {
  conversationList: Conversation[];
  onSelect: (item: Conversation) => void;
  selectedItemId: string | null;
}

export default function Sidebar({ conversationList, onSelect, selectedItemId }: Props) {
  return (
    <Paper elevation={3}>
      <Typography variant="h6" p={2}>
        Conversations
      </Typography>
      <Divider />
      <List>
        {conversationList.map((c) => (
          <ListItemButton
            key={c.id}
            selected={c.id == selectedItemId}
            onClick={() => onSelect(c)}
            sx={{ cursor: 'pointer' }}
          >
            <ListItemText
              primary={<Typography fontWeight="bold">{c.title}</Typography>}
              secondary={<ReviewStatusChip reviewStatus={c.reviewStatus} />}
            />
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
}
