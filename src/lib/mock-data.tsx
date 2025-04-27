// import type { User, Message } from "@/types/chat"

import { Message, User } from "../types/chat"

export const MOCK_USERS: User[] = [
  {
    id: "user-1",
    name: "Alex Johnson",
    avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    status: "online",
    lastMessage: "Let's meet tomorrow at 10 AM",
    unreadCount: 3,
  },
  {
    id: "user-2",
    name: "Sarah Williams",
    avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    status: "online",
    lastMessage: "The project looks great!",
    unreadCount: 0,
  },
  {
    id: "user-3",
    name: "Michael Brown",
    avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    status: "offline",
    lastMessage: "I'll send you the files later",
    unreadCount: 0,
  },
  {
    id: "user-4",
    name: "Emily Davis",
    avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    status: "online",
    lastMessage: "Thanks for your help!",
    unreadCount: 1,
  },
  {
    id: "user-5",
    name: "David Wilson",
    avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    status: "offline",
    lastMessage: "See you at the meeting",
    unreadCount: 0,
  },
  {
    id: "user-6",
    name: "Jessica Taylor",
    avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    status: "online",
    lastMessage: "Did you check the latest update?",
    unreadCount: 2,
  },
  {
    id: "user-7",
    name: "Ryan Martinez",
    avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    status: "offline",
    lastMessage: "I'll call you later",
    unreadCount: 0,
  },
  {
    id: "user-8",
    name: "Olivia Anderson",
    avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    status: "online",
    lastMessage: "The presentation went well",
    unreadCount: 0,
  },
]

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
    content: "Doing well! Just wanted to check if we're still on for tomorrow's meeting?",
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
]
