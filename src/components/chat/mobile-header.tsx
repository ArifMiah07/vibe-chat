"use client"


import { Button } from "@/components/ui/button"
import { User } from "@/types/chat"
import { Menu, X } from "lucide-react"

interface MobileHeaderProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  selectedUser: User | null
}

export function MobileHeader({ sidebarOpen, setSidebarOpen, selectedUser }: MobileHeaderProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-20 border-b bg-background md:hidden">
      <div className="flex items-center justify-between p-2">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">{sidebarOpen ? "Close sidebar" : "Open sidebar"}</span>
        </Button>
        {!sidebarOpen && selectedUser && (
          <div className="flex items-center">
            <div className="relative">
              <img
                src={selectedUser.avatar || "/placeholder.svg"}
                alt={selectedUser.name}
                className="w-8 h-8 rounded-full"
              />
              <span
                className={`absolute bottom-0 right-0 w-2 h-2 rounded-full border-2 border-background ${selectedUser.status === "online" ? "bg-green-500" : "bg-gray-400"}`}
              ></span>
            </div>
            <div className="ml-2">
              <h2 className="font-medium text-sm">{selectedUser.name}</h2>
              <p className="text-xs text-muted-foreground">{selectedUser.status === "online" ? "Online" : "Offline"}</p>
            </div>
          </div>
        )}
        {!sidebarOpen && !selectedUser && <h1 className="text-lg font-semibold">Chat App</h1>}
        <div className="w-9"></div> {/* Spacer for alignment */}
      </div>
    </div>
  )
}
