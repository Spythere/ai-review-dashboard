import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  colors,
  Divider,
  ListItemButton,
  Paper,
  Drawer,
  Toolbar
} from '@mui/material';
import type { Conversation } from '../types';
import { ReviewStatusChip } from './ReviewStatusChip';

interface Props {
  drawerWidth: number;
  conversationList: Conversation[];
  onSelect: (item: Conversation) => void;
  selectedItemId: string | null;
}

export default function Sidebar({ conversationList, onSelect, selectedItemId, drawerWidth }: Props) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box'
        }
      }}
    >
      <Toolbar />

      <Typography variant="h5" p={2}>
        Conversations
      </Typography>

      <Box sx={{ overflow: 'auto' }}>
        <List>
          {conversationList.map((c) => (
            <ListItemButton
              key={c.id}
              selected={c.id == selectedItemId}
              onClick={() => onSelect(c)}
              sx={{ cursor: 'pointer' }}
            >
              <ListItemText primary={<Typography fontWeight="bold">{c.title}</Typography>} />
              <ReviewStatusChip reviewStatus={c.reviewStatus} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
