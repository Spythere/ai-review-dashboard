import type { ConversationDetails, ConversationListItem } from '../types';

// Mock list containing only information necessary to show it in the sidebar section - details would be fetched "on the go"
export const mockConversationItems: ConversationListItem[] = [
  {
    id: '1',
    title: 'Problem with the last billing period',
    reviewStatus: 'Pending',
    lastUpdatedTimestamp: Date.now()
  },
  {
    id: '2',
    title: 'Test message',
    reviewStatus: 'Needs Fix',
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
      { id: 'm2', sender: 'AI', content: 'It is on the way.', timestamp: Date.now() }
    ],
    notes: []
  },
  {
    ...mockConversationItems[1],
    category: 'Test',
    messages: [
      { id: 'm1', sender: 'Customer', content: 'Test message from customer.', timestamp: Date.now() },
      { id: 'm2', sender: 'AI', content: 'Test message from AI.', timestamp: Date.now() }
    ],
    notes: []
  }
];
