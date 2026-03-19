import { Box } from '@mui/material';
import { useState } from 'react';
import type { ConversationDetails } from './types';

function App() {
  const [conversationList, setConversationList] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState<ConversationDetails | null>(null);

  return (
    <Box display="flex" height="100vh">
      {/* TODO: Sidebar component */}
      {/* <Sidebar /> */}

      <Box flex={1} p={2}>
        {selectedConversation && (
          <>
            test
            {/* <ConversationDetails  /> */}
            {/* <NotesSection  /> */}
          </>
        )}
      </Box>
    </Box>
  );
}

export default App;
