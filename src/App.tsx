import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import type { ConversationListItem } from './types';
import { mockConversationItems } from './data/mockData';
import Sidebar from './components/Sidebar';

function App() {
  const [conversationList, setConversationList] = useState(mockConversationItems);
  const [selectedConversation, setSelectedConversation] = useState<ConversationListItem | null>(null);

  return (
    <Box display="flex" height="100vh" color="white">
      {/* TODO: Sidebar component */}
      <Sidebar conversationList={conversationList} onSelect={setSelectedConversation} />

      <Box flex={1} p={2} bgcolor="#3b3b3b">
        {selectedConversation && (
          <>
            <Typography variant="h4">{selectedConversation.title} </Typography>
            {/* <ConversationDetails  /> */}
            {/* <NotesSection  /> */}
          </>
        )}
      </Box>
    </Box>
  );
}

export default App;
