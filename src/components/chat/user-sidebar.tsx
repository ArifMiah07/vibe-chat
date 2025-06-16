"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Settings, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { User } from "@/types/chat"

interface UserSidebarProps {
  users: User[]
  selectedUser: User | null
  setSelectedUser: (user: User) => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  isMobile: boolean
}

export function UserSidebar({ users, selectedUser, setSelectedUser, isOpen, setIsOpen, isMobile }: UserSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()))

  // If sidebar is closed on mobile, don't render content
  if (isMobile && !isOpen) {
    return null
  }

  return (
    <div
      className={cn(
        "h-full border-r bg-muted/10 flex flex-col transition-all duration-300 ease-in-out",
        isMobile ? (isOpen ? "w-full absolute z-10 inset-0 bg-background" : "w-0") : "w-80",
      )}
    >
      {/* User Profile */}
      <div className="p-4 border-b">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
              alt="Your avatar"
              className="w-10 h-10 rounded-full bg-primary/10"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></span>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="font-medium truncate">{'Yung Leing'}</h2>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
          <div className="flex space-x-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Settings className="h-4 w-4" />
              <span className="sr-only">Settings</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <LogOut className="h-4 w-4" />
              <span className="sr-only">Log out</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search contacts..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* User List */}
      <div className="flex-1 overflow-auto">
        <div className="p-2">
          <h3 className="text-sm font-medium text-muted-foreground px-2 py-1.5">Contacts ({filteredUsers.length})</h3>
          <ul className="space-y-1 mt-1">
            {filteredUsers.map((user) => (
              <li key={user.id}>
                <button
                  className={cn(
                    "w-full flex items-center space-x-3 px-2 py-2 rounded-md transition-colors",
                    selectedUser?.id === user.id ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                  )}
                  onClick={() => {
                    setSelectedUser(user)
                    if (isMobile) setIsOpen(false)
                  }}
                >
                  <div className="relative">
                    <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="w-10 h-10 rounded-full" />
                    <span
                      className={cn(
                        "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2",
                        selectedUser?.id === user.id ? "border-primary" : "border-background",
                        user.status === "online" ? "bg-green-500" : "bg-gray-400",
                      )}
                    ></span>
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <h4 className="font-medium truncate">{user.name}</h4>
                    <p
                      className={cn(
                        "text-xs truncate",
                        selectedUser?.id === user.id ? "text-primary-foreground/70" : "text-muted-foreground",
                      )}
                    >
                      {user.lastMessage}
                    </p>
                  </div>
                  {user.unreadCount > 0 && (
                    <span
                      className={cn(
                        "flex items-center justify-center w-5 h-5 text-xs rounded-full",
                        selectedUser?.id === user.id
                          ? "bg-primary-foreground text-primary"
                          : "bg-primary text-primary-foreground",
                      )}
                    >
                      {user.unreadCount}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
