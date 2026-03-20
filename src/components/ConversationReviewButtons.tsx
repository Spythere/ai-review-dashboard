import { Stack, Button } from '@mui/material';
import type { ConverstationReviewStatus } from '../types';

interface Props {
  onReviewStatusChange: (status: ConverstationReviewStatus) => void;
}

export function ConversationReviewButtons({ onReviewStatusChange }: Props) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" color="success" onClick={() => onReviewStatusChange('Approved')}>
        Approve
      </Button>

      <Button variant="contained" color="error" onClick={() => onReviewStatusChange('Needs Fix')}>
        Needs Fix
      </Button>
    </Stack>
  );
}
