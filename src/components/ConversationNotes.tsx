import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import type { ConversationNote } from '../types';

interface Props {
  noteList: ConversationNote[];
  noteInput: string;
  error: string | null;
  setNoteInput: (v: string) => void;
  onAdd: () => void;
}

export default function ConversationNotes({ noteList, noteInput, error, setNoteInput, onAdd }: Props) {
  return (
    <Box>
      <Typography variant="h6">Notes</Typography>

      <TextField
        fullWidth
        value={noteInput}
        onChange={(e) => setNoteInput(e.target.value)}
        error={!!error}
        helperText={error}
        sx={{ my: 1, bgcolor: 'white' }}
      />

      <Button variant="contained" onClick={onAdd}>
        Save
      </Button>

      {noteList.map((n) => (
        <Paper key={n.id} sx={{ p: 1, mt: 1 }}>
          {n.text}
        </Paper>
      ))}
    </Box>
  );
}
