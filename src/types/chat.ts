export interface User {
    id: string
    name: string
    avatar: string
    status: "online" | "offline"
    lastMessage: string
    unreadCount: number
  }
  
  export interface Message {
    id: string
    content: string
    senderId: string
    receiverId: string
    timestamp: Date
    status: "sent" | "delivered" | "read"
  }
  