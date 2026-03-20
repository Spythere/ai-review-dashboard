export type ConverstationReviewStatus = 'Pending' | 'Approved' | 'Needs Fix';
export type ConverstationMessageSender = 'Customer' | 'AI';

export interface ConversationMessage {
  id: string;
  sender: ConverstationMessageSender;
  content: string;
  timestamp: number;
}

export interface ConversationNote {
  id: string;
  text: string;
}

export interface Conversation {
  id: string;
  title: string;
  reviewStatus: ConverstationReviewStatus;
  lastUpdatedTimestamp: number;
  messages: ConversationMessage[];
  notes: ConversationNote[];
  category: string;
}
