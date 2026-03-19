import type { ConversationDetails, ConversationListItem } from '../types';

// Mock list containing only information necessary to show it in the sidebar section - details would be fetched "on the go"
export const mockConversationItems: ConversationListItem[] = [
  {
    id: '1',
    title: 'Problem with the last billing period',
    reviewStatus: 'Pending',
    lastUpdatedTimestamp: Date.now()
  }
];

// Details containing basic data and extended one to show in the main area
export const mockConversationDetails: ConversationDetails[] = [
  {
    ...mockConversationItems[0],
    category: 'Finances',
    messages: [
      { id: 'm1', sender: 'Customer', content: 'Where is my order?', timestamp: Date.now() },
      { id: 'm2', sender: 'Customer', content: 'It is on the way.', timestamp: Date.now() }
    ]
  }
];
