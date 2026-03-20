import { Chip } from '@mui/material';
import type { ConverstationReviewStatus } from '../types';
import { useEffect, useState } from 'react';

interface Props {
  reviewStatus: ConverstationReviewStatus;
}

export function ReviewStatusChip({ reviewStatus }: Props) {
  const [chipText, setChipText] = useState('');

  useEffect(() => {
    switch (reviewStatus) {
      case 'Approved':
        setChipText('APPROVED');
        break;

      case 'Needs Fix':
        setChipText('NEEDS FIX');
        break;

      case 'Pending':
      default:
        setChipText('PENDING');
        break;
    }
  }, [reviewStatus]);

  return (
    <Chip
      variant="filled"
      size='small'
      color={reviewStatus == 'Approved' ? 'success' : reviewStatus == 'Needs Fix' ? 'error' : 'info'}
      label={chipText}
    />
  );
}
