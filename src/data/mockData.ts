import type { Conversation } from '../types';

export const mockConversationItems: Conversation[] = [
  {
    id: '1',
    title: 'Data request',
    reviewStatus: 'Needs Fix',
    lastUpdatedTimestamp: 1774011539000,
    category: 'Bug',
    city: 'Wrocław',
    messages: [
      { id: 'm1', sender: 'Customer', content: 'Where is my order?', timestamp: 1774011536000 },
      { id: 'm2', sender: 'AI', content: 'It is on the way.', timestamp: 1774011539000 },
      { id: 'm3', sender: 'AI', content: 'It is on the way.', timestamp: 1774011539000 },
      { id: 'm4', sender: 'AI', content: 'It is on the way.', timestamp: 1774011539000 },
      { id: 'm5', sender: 'AI', content: 'It is on the way.', timestamp: 1774011539000 }
    ],
    notes: [
      {
        id: 'n1',
        text: 'Needs urgent fix'
      }
    ]
  },
  {
    id: '2',
    title: 'Test message',
    reviewStatus: 'Pending',
    lastUpdatedTimestamp: 1773934485000,
    category: 'Test',
    city: 'London',
    messages: [
      { id: 'm1', sender: 'Customer', content: 'Test message from customer.', timestamp: 1773934485000 },
      { id: 'm2', sender: 'AI', content: 'Test message from AI.', timestamp: 1773934485000 }
    ],
    notes: []
  },
  {
    id: '3',
    title: 'Billing issue',
    reviewStatus: 'Approved',
    lastUpdatedTimestamp: 1773934485000,
    category: 'Finances',
    city: 'Sri Jayawardenepura Kotte',
    messages: [
      { id: 'm1', sender: 'Customer', content: 'I have a billing issue with your service.', timestamp: 1773934485000 },
      {
        id: 'm2',
        sender: 'AI',
        content: 'No problem, please give more information about your issue.',
        timestamp: 1773934485000
      }
    ],
    notes: [
      {
        id: 'n1',
        text: 'Looks good to me'
      }
    ]
  }
];
