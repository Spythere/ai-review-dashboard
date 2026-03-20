import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import type { Conversation, ConversationNote, ConverstationReviewStatus } from './types';
import { mockConversationItems } from './data/mockData';
import Sidebar from './components/Sidebar';
import { SelectedConversation } from './components/SelectedConversation';

function App() {
  const [conversationList, setConversationList] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);

  useEffect(() => {
    setConversationList(mockConversationItems);
  }, []);

  function updateReviewStatus(reviewStatus: ConverstationReviewStatus) {
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
  }

  function updateConversationNote(note: ConversationNote) {
    if (!selectedConversation) return;

    const newNotes: ConversationNote[] = [...selectedConversation.notes, note];

    setSelectedConversation({ ...selectedConversation, notes: newNotes });

    setConversationList(
      conversationList.map((conv) => {
        if (conv.id == selectedConversation.id) {
          return { ...conv, notes: newNotes };
        }

        return conv;
      })
    );
  }

  return (
    <Box display="flex" height="100vh" color="white">
      <Sidebar conversationList={conversationList} onSelect={setSelectedConversation} />

      <Box flex={1} p={2} bgcolor="#3b3b3b">
        {selectedConversation && (
          <SelectedConversation
            conversation={selectedConversation}
            onReviewStatusChange={updateReviewStatus}
            onNoteAdd={updateConversationNote}
          />
        )}
      </Box>
    </Box>
  );
}

export default App;
