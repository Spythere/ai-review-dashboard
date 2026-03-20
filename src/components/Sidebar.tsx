import { Box, Typography, List, ListItem, ListItemText, colors, Divider } from '@mui/material';
import type { Conversation } from '../types';

interface Props {
  conversationList: Conversation[];
  onSelect: (item: Conversation) => void;
}

export default function Sidebar({ conversationList, onSelect }: Props) {
  return (
    <Box p={2} bgcolor={colors.grey[900]}>
      <Typography variant="h6">Conversations</Typography>
      <Divider />
      <List>
        {conversationList.map((c) => (
          <ListItem key={c.id} onClick={() => onSelect(c)} sx={{ cursor: 'pointer' }}>
            <ListItemText
              primary={<Typography fontWeight="bold">{c.title}</Typography>}
              secondary={<Typography color="gold">{c.reviewStatus}</Typography>}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
