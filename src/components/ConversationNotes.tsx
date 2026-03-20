import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import type { ConversationNote } from '../types';

interface Props {
  noteList: ConversationNote[];
  setNoteInput: (v: string) => void;
  noteInput: string;
  onNoteAdd: () => void;
  inputError: string | null;
}

export default function ConversationNotes({ noteList, onNoteAdd, noteInput, setNoteInput, inputError }: Props) {
  return (
    <Box my={2}>
      <Typography variant="h5">Internal Notes</Typography>

      <Box my={2}>
        <TextField
          label="Note content"
          variant="outlined"
          fullWidth
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          error={inputError != null}
          helperText={inputError}
        />
      </Box>

      <Box my={2}>
        {noteList.map((n) => (
          <Paper key={n.id} sx={{ p: 1, mt: 1 }}>
            {n.text}
          </Paper>
        ))}
      </Box>

      <Button variant="contained" onClick={onNoteAdd}>
        Save
      </Button>
    </Box>
  );
}
