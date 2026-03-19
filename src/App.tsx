import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import type { ConversationListItem, ConverstationReviewStatus } from './types';
import { mockConversationItems } from './data/mockData';
import Sidebar from './components/Sidebar';
import ConversationDetails from './components/ConversationDetails';

function App() {
  const [conversationList, setConversationList] = useState<ConversationListItem[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<ConversationListItem | null>(null);

  useEffect(() => {
    setConversationList(mockConversationItems);
  }, []);

  const updateReviewStatus = (reviewStatus: ConverstationReviewStatus) => {
    if (!selectedConversation) return;

    setSelectedConversation({ ...selectedConversation, reviewStatus: reviewStatus });
  };

  return (
    <Box display="flex" height="100vh" color="white">
      <Sidebar conversationList={conversationList} onSelect={setSelectedConversation} />

      <Box flex={1} p={2} bgcolor="#3b3b3b">
        {selectedConversation && (
          <>
            <ConversationDetails conversation={selectedConversation} onReviewStatusChange={updateReviewStatus} />
            {/* <NotesSection  /> */}
          </>
        )}
      </Box>
    </Box>
  );
}

export default App;
