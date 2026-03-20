import {
  Alert,
  AppBar,
  Box,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import type { Conversation, ConversationNote, ConverstationReviewStatus } from './types';
import { mockConversationItems } from './data/mockData';
import Sidebar from './components/Sidebar';
import { SelectedConversation } from './components/SelectedConversation';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

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
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              AI Conversation Dashboard
            </Typography>
          </Toolbar>
        </AppBar>

        <Container sx={{ mt: 2, flexGrow: 1 }} maxWidth="xl">
          <Grid container spacing={2}>
            <Grid size={4}>
              <Sidebar conversationList={conversationList} onSelect={setSelectedConversation} />
            </Grid>

            <Grid size={8}>
              {selectedConversation ? (
                <SelectedConversation
                  conversation={selectedConversation}
                  onReviewStatusChange={updateReviewStatus}
                  onNoteAdd={updateConversationNote}
                />
              ) : (
                <Alert severity="info">Choose conversation to see its content.</Alert>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
