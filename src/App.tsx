import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import type { ConversationListItem, ConverstationReviewStatus } from './types';
import { mockConversationItems } from './data/mockData';
import Sidebar from './components/Sidebar';
import { SelectedConversation } from './components/SelectedConversation';

function App() {
  const [conversationList, setConversationList] = useState<ConversationListItem[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<ConversationListItem | null>(null);

  useEffect(() => {
    setConversationList(mockConversationItems);
  }, []);

  const updateReviewStatus = (reviewStatus: ConverstationReviewStatus) => {
    if (!selectedConversation) return;

    setSelectedConversation({ ...selectedConversation, reviewStatus: reviewStatus });
    
    setConversationList(
      conversationList.map((conv) => {
        if (conv.id == selectedConversation.id) {
          return { ...conv, reviewStatus };
        }

        return conv;
      })
    );
  };

  return (
    <Box display="flex" height="100vh" color="white">
      <Sidebar conversationList={conversationList} onSelect={setSelectedConversation} />

      <Box flex={1} p={2} bgcolor="#3b3b3b">
        {selectedConversation && (
          <SelectedConversation conversation={selectedConversation} onReviewStatusChange={updateReviewStatus} />
        )}
      </Box>
    </Box>
  );
}

export default App;
