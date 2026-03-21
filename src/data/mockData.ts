import type { Conversation } from '../types';

export const mockConversationItems: Conversation[] = [
  {
    id: '1',
    title: 'Problem with the last billing period',
    reviewStatus: 'Pending',
    lastUpdatedTimestamp: Date.now(),
    category: 'Finances',
    city: 'Wrocław',
    messages: [
      { id: 'm1', sender: 'Customer', content: 'Where is my order?', timestamp: Date.now() },
      { id: 'm2', sender: 'AI', content: 'It is on the way.', timestamp: Date.now() },
      { id: 'm3', sender: 'AI', content: 'It is on the way.', timestamp: Date.now() },
      { id: 'm4', sender: 'AI', content: 'It is on the way.', timestamp: Date.now() },
      { id: 'm5', sender: 'AI', content: 'It is on the way.', timestamp: Date.now() }
    ],
    notes: [
      {
        id: 'n1',
        text: 'To be reviewed later.'
      }
    ]
  },
  {
    id: '2',
    title: 'Test message',
    reviewStatus: 'Needs Fix',
    lastUpdatedTimestamp: Date.now(),
    category: 'Test',
    city: 'London',
    messages: [
      { id: 'm1', sender: 'Customer', content: 'Test message from customer.', timestamp: Date.now() },
      { id: 'm2', sender: 'AI', content: 'Test message from AI.', timestamp: Date.now() }
    ],
    notes: [
      {
        id: 'n1',
        text: 'Needs urgent fix'
      }
    ]
  }
];
