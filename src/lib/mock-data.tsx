// import type { User, Message } from "@/types/chat"

import { Message, User } from "../types/chat";

export const MOCK_USERS: User[] = [
  {
    id: "user-1",
    name: "Alex Johnson",
    avatar:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    status: "online",
    lastMessage: "Let's meet tomorrow at 10 AM",
    unreadCount: 3,
  },
  {
    id: "user-2",
    name: "Sarah Williams",
    avatar:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    status: "online",
    lastMessage: "The project looks great!",
    unreadCount: 0,
  },
  {
    id: "user-3",
    name: "Michael Brown",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    status: "offline",
    lastMessage: "I'll send you the files later",
    unreadCount: 0,
  },
  {
    id: "user-4",
    name: "Emily Davis",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    status: "online",
    lastMessage: "Thanks for your help!",
    unreadCount: 1,
  },
  {
    id: "user-5",
    name: "David Wilson",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    status: "offline",
    lastMessage: "See you at the meeting",
    unreadCount: 0,
  },
  {
    id: "user-6",
    name: "Jessica Taylor",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    status: "online",
    lastMessage: "Did you check the latest update?",
    unreadCount: 2,
  },
  {
    id: "user-7",
    name: "Ryan Martinez",
    avatar:
      "https://plus.unsplash.com/premium_photo-1689606093808-3cb4393248d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    status: "offline",
    lastMessage: "I'll call you later",
    unreadCount: 0,
  },
  {
    id: "user-8",
    name: "Olivia Anderson",
    avatar:
      "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    status: "online",
    lastMessage: "The presentation went well",
    unreadCount: 0,
  },
];

export const MOCK_MESSAGES: Message[] = [
  {
    id: "msg-1",
    content: "Hey, how are you doing?",
    senderId: "user-1",
    receiverId: "current-user",
    timestamp: new Date(Date.now() - 86400000 * 2), // 2 days ago
    status: "read",
  },
  {
    id: "msg-2",
    content: "I'm good, thanks! How about you?",
    senderId: "current-user",
    receiverId: "user-1",
    timestamp: new Date(Date.now() - 86400000 * 2 + 300000), // 5 minutes after
    status: "read",
  },
  {
    id: "msg-3",
    content:
      "Doing well! Just wanted to check if we're still on for tomorrow's meeting?",
    senderId: "user-1",
    receiverId: "current-user",
    timestamp: new Date(Date.now() - 86400000 * 2 + 600000), // 10 minutes after
    status: "read",
  },
  {
    id: "msg-4",
    content: "Yes, absolutely! 10 AM at the coffee shop, right?",
    senderId: "current-user",
    receiverId: "user-1",
    timestamp: new Date(Date.now() - 86400000 * 2 + 900000), // 15 minutes after
    status: "read",
  },
  {
    id: "msg-5",
    content: "Perfect! I'll bring the project documents we discussed.",
    senderId: "user-1",
    receiverId: "current-user",
    timestamp: new Date(Date.now() - 86400000), // 1 day ago
    status: "read",
  },
  {
    id: "msg-6",
    content: "Sounds good. I've also prepared some notes on the new features.",
    senderId: "current-user",
    receiverId: "user-1",
    timestamp: new Date(Date.now() - 86400000 + 300000), // 5 minutes after
    status: "read",
  },
  {
    id: "msg-7",
    content: "Great! Looking forward to it. Let's meet tomorrow at 10 AM then.",
    senderId: "user-1",
    receiverId: "current-user",
    timestamp: new Date(Date.now() - 3600000 * 3), // 3 hours ago
    status: "read",
  },
  {
    id: "msg-8",
    content: "Don't forget to bring your laptop as well.",
    senderId: "user-1",
    receiverId: "current-user",
    timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
    status: "delivered",
  },
];
