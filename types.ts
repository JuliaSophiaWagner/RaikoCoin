
export interface ChatMessage {
  sender: 'user' | 'raiko';
  text: string;
  imageUrl?: string;
}
