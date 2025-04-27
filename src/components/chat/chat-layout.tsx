"use client"

import { useState, useEffect } from "react"
import { UserSidebar } from "@/components/chat/user-sidebar"
import { ChatPanel } from "@/components/chat/chat-panel"
import { MessageInput } from "@/components/chat/message-input"
import { MobileHeader } from "@/components/chat/mobile-header"
import type { Message, User } from "@/types/chat"
import { MOCK_USERS, MOCK_MESSAGES } from "@/lib/mock-data"
import { useMediaQuery } from "@/hooks/use-media-query"

export function ChatLayout() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [messages, setMessages] = useState<Message[]>(MOCK_MESSAGES)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false)
    } else {
      setSidebarOpen(true)
    }
  }, [isMobile])

  useEffect(() => {
    if (MOCK_USERS.length > 0 && !selectedUser) {
      setSelectedUser(MOCK_USERS[0])
    }
  }, [selectedUser])

  const handleSendMessage = (content: string) => {
    if (!content.trim() || !selectedUser) return

    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      content,
      senderId: "current-user", // Current user ID
      receiverId: selectedUser.id,
      timestamp: new Date(),
      status: "sent",
    }

    setMessages((prev) => [...prev, newMessage])

    // Simulate receiving a response
    setIsTyping(true)
    setTimeout(() => {
      const responseMessage: Message = {
        id: `msg-${Date.now() + 1}`,
        content: `This is a response to: "${content}"`,
        senderId: selectedUser.id,
        receiverId: "current-user",
        timestamp: new Date(),
        status: "sent",
      }
      setMessages((prev) => [...prev, responseMessage])
      setIsTyping(false)
    }, 2000)
  }

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      {/* Mobile Header - only visible on mobile */}
      {isMobile && (
        <MobileHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} selectedUser={selectedUser} />
      )}

      {/* Sidebar */}
      <UserSidebar
        users={MOCK_USERS}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        isMobile={isMobile}
      />

      {/* Main Chat Area */}
      <div className="flex flex-1 flex-col h-full">
        {!isMobile && selectedUser && (
          <div className="border-b p-4 flex items-center">
            <div className="relative">
              <img
                src={selectedUser.avatar || "/placeholder.svg"}
                alt={selectedUser.name}
                className="w-10 h-10 rounded-full"
              />
              <span
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background ${selectedUser.status === "online" ? "bg-green-500" : "bg-gray-400"}`}
              ></span>
            </div>
            <div className="ml-3">
              <h2 className="font-medium">{selectedUser.name}</h2>
              <p className="text-xs text-muted-foreground">{selectedUser.status === "online" ? "Online" : "Offline"}</p>
            </div>
          </div>
        )}

        <ChatPanel
          messages={messages.filter(
            (msg) =>
              (msg.senderId === selectedUser?.id && msg.receiverId === "current-user") ||
              (msg.receiverId === selectedUser?.id && msg.senderId === "current-user"),
          )}
          currentUserId="current-user"
          isTyping={isTyping}
          selectedUser={selectedUser}
        />

        <MessageInput onSendMessage={handleSendMessage} disabled={!selectedUser} />
      </div>
    </div>
  )
}
