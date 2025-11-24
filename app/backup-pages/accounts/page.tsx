'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  User,
  Grid3X3,
  CreditCard,
  LogOut,
  Edit2,
  Mail,
  Eye,
  EyeOff,
  Phone,
} from 'lucide-react'

export default function Component() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)

  const [email, setEmail] = useState('bornhappy5@gmail.com')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [firstName, setFirstName] = useState('Ronald')
  const [lastName, setLastName] = useState('McGuinness')
  const [phoneNumber, setPhoneNumber] = useState('+44 7737 497045')

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
        }}
      />

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="flex gap-6 w-full max-w-6xl">
          {/* Left Sidebar */}
          <div className="w-80">
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-6 border border-white/20">
              <nav className="space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-white/20 bg-white/10 rounded-2xl h-12"
                >
                  <User className="mr-3 h-5 w-5" />
                  Account
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white/70 hover:bg-white/20 rounded-2xl h-12"
                >
                  <Grid3X3 className="mr-3 h-5 w-5" />
                  Workspaces
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white/70 hover:bg-white/20 rounded-2xl h-12"
                >
                  <CreditCard className="mr-3 h-5 w-5" />
                  Payment
                </Button>
              </nav>

              <div className="mt-auto pt-32">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white/70 hover:bg-white/20 rounded-2xl h-12"
                >
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                    <LogOut className="h-4 w-4 text-white" />
                  </div>
                  Logout
                </Button>
              </div>
            </div>
          </div>

          {/* Main Account Panel */}
          <div className="flex-1">
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20">
              <h1 className="text-2xl font-semibold text-white mb-8">
                Account
              </h1>

              {/* Profile Avatar */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <Avatar className="w-24 h-24 bg-black border-4 border-white/20">
                    <AvatarFallback className="bg-black text-white text-2xl">
                      <User className="w-8 h-8" />
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="icon"
                    className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-white text-black hover:bg-white/90"
                  >
                    <Edit2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <Label className="text-white/70 text-sm mb-2 block">
                  Email
                </Label>
                <div className="relative">
                  <Input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="bg-black/30 border-white/20 text-white placeholder:text-white/50 rounded-2xl h-12 pr-20"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-white/50" />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="w-8 h-8 text-white/70 hover:text-white"
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <Label className="text-white/70 text-sm mb-2 block">
                    Current password
                  </Label>
                  <div className="relative">
                    <Input
                      type={showCurrentPassword ? 'text' : 'password'}
                      value={currentPassword}
                      onChange={e => setCurrentPassword(e.target.value)}
                      placeholder="Enter current password"
                      className="bg-black/30 border-white/20 text-white placeholder:text-white/50 rounded-2xl h-12 pr-12"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 text-white/70 hover:text-white"
                      onClick={() =>
                        setShowCurrentPassword(!showCurrentPassword)
                      }
                    >
                      {showCurrentPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
                <div>
                  <Label className="text-white/70 text-sm mb-2 block">
                    New password
                  </Label>
                  <div className="relative">
                    <Input
                      type={showNewPassword ? 'text' : 'password'}
                      value={newPassword}
                      onChange={e => setNewPassword(e.target.value)}
                      placeholder="Enter new password"
                      className="bg-black/30 border-white/20 text-white placeholder:text-white/50 rounded-2xl h-12 pr-12"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 text-white/70 hover:text-white"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="mb-6">
                <h2 className="text-white text-lg font-medium mb-4">
                  Personal information
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label className="text-white/70 text-sm mb-2 block">
                      First name
                    </Label>
                    <div className="relative">
                      <Input
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        className="bg-black/30 border-white/20 text-white placeholder:text-white/50 rounded-2xl h-12 pr-12"
                      />
                      <User className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                    </div>
                  </div>
                  <div>
                    <Label className="text-white/70 text-sm mb-2 block">
                      Last name
                    </Label>
                    <div className="relative">
                      <Input
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        className="bg-black/30 border-white/20 text-white placeholder:text-white/50 rounded-2xl h-12 pr-12"
                      />
                      <User className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <Label className="text-white/70 text-sm mb-2 block">
                  Phone number
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <div className="w-6 h-4 bg-blue-600 relative overflow-hidden rounded-sm">
                      <div className="absolute inset-0 bg-red-600"></div>
                      <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-2 bg-white"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-1 bg-white"></div>
                    </div>
                  </div>
                  <Input
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    className="bg-black/30 border-white/20 text-white placeholder:text-white/50 rounded-2xl h-12 pl-12 pr-12"
                  />
                  <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
