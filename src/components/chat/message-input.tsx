"use client"

import type React from "react"

import { useState, useRef, type KeyboardEvent } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Paperclip, Smile, Send, Mic } from "lucide-react"
import { cn } from "@/lib/utils"

interface MessageInputProps {
  onSendMessage: (message: string) => void
  disabled?: boolean
}

export function MessageInput({ onSendMessage, disabled = false }: MessageInputProps) {
  const [message, setMessage] = useState("")
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSendMessage = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message)
      setMessage("")

      // Reset textarea height  {
      onSendMessage(message)
      setMessage("")

      // Reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto"
      }
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)

    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }

  return (
    <div className="border-t p-4">
      <div className="flex items-end space-x-2">
        <Button variant="ghost" size="icon" className="h-9 w-9 shrink-0" disabled={disabled}>
          <Paperclip className="h-5 w-5" />
          <span className="sr-only">Attach file</span>
        </Button>

        <div
          className={cn("relative flex-1 overflow-hidden rounded-lg border bg-background", disabled && "opacity-50")}
        >
          <Textarea
            ref={textareaRef}
            placeholder={disabled ? "Select a contact to start messaging" : "Type a message..."}
            className="min-h-[40px] max-h-[200px] resize-none border-0 p-3 pr-12 focus-visible:ring-0"
            value={message}
            onChange={handleTextareaChange}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            rows={1}
          />
          <div className="absolute right-2 bottom-1 flex space-x-1">
            <Button variant="ghost" size="icon" className="h-8 w-8" disabled={disabled}>
              <Smile className="h-5 w-5" />
              <span className="sr-only">Add emoji</span>
            </Button>
          </div>
        </div>

        {message.trim() ? (
          <Button size="icon" className="h-9 w-9 shrink-0" onClick={handleSendMessage} disabled={disabled}>
            <Send className="h-5 w-5" />
            <span className="sr-only">Send message</span>
          </Button>
        ) : (
          <Button variant="ghost" size="icon" className="h-9 w-9 shrink-0" disabled={disabled}>
            <Mic className="h-5 w-5" />
            <span className="sr-only">Voice message</span>
          </Button>
        )}
      </div>
    </div>
  )
}
