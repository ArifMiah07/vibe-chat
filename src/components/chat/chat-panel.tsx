"use client"

import { useRef, useEffect } from "react"
import { formatDistanceToNow } from "date-fns"
import { cn } from "@/lib/utils"
import { Message, User } from "@/types/chat"

interface ChatPanelProps {
  messages: Message[]
  currentUserId: string
  isTyping: boolean
  selectedUser: User | null
}

export function ChatPanel({ messages, currentUserId, isTyping, selectedUser }: ChatPanelProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  // Group messages by date
  const groupedMessages: { [date: string]: Message[] } = {}

  messages.forEach((message) => {
    const date = new Date(message.timestamp).toLocaleDateString()
    if (!groupedMessages[date]) {
      groupedMessages[date] = []
    }
    groupedMessages[date].push(message)
  })

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-6">
      {Object.keys(groupedMessages).map((date) => (
        <div key={date} className="space-y-4">
          <div className="flex justify-center">
            <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
              {date === new Date().toLocaleDateString() ? "Today" : date}
            </span>
          </div>

          {groupedMessages[date].map((message) => {
            const isCurrentUser = message.senderId === currentUserId

            return (
              <div key={message.id} className={cn("flex", isCurrentUser ? "justify-end" : "justify-start")}>
                <div className="flex items-end max-w-[75%] space-x-2">
                  {!isCurrentUser && (
                    <img
                      src={selectedUser?.avatar || "/placeholder.svg?height=32&width=32"}
                      alt="Avatar"
                      className="w-8 h-8 rounded-full mb-1"
                    />
                  )}

                  <div className="space-y-1">
                    <div
                      className={cn(
                        "px-4 py-2 rounded-2xl",
                        isCurrentUser
                          ? "bg-primary text-primary-foreground rounded-br-none"
                          : "bg-muted rounded-bl-none",
                      )}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                    <p className={cn("text-xs", isCurrentUser ? "text-right" : "text-left", "text-muted-foreground")}>
                      {formatDistanceToNow(new Date(message.timestamp), { addSuffix: true })}
                    </p>
                  </div>

                  {isCurrentUser && (
                    <img
                      src="/placeholder.svg?height=32&width=32"
                      alt="Your avatar"
                      className="w-8 h-8 rounded-full mb-1"
                    />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      ))}

      {isTyping && selectedUser && (
        <div className="flex justify-start">
          <div className="flex items-end space-x-2">
            <img
              src={selectedUser.avatar || "/placeholder.svg"}
              alt={selectedUser.name}
              className="w-8 h-8 rounded-full mb-1"
            />
            <div className="px-4 py-3 bg-muted rounded-2xl rounded-bl-none">
              <div className="flex space-x-1">
                <div
                  className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Empty state when no messages */}
      {messages.length === 0 && !isTyping && (
        <div className="h-full flex flex-col items-center justify-center text-center p-8">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-muted-foreground"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium">No messages yet</h3>
          <p className="text-muted-foreground text-sm mt-1">Send a message to start the conversation</p>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  )
}
