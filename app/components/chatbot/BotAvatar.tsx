'use client'

import React from 'react'
import { HiSparkles } from 'react-icons/hi2'

export const BotAvatar = () => (
  <div
    style={{
      width: 32,
      height: 32,
      borderRadius: 10,
      background: 'linear-gradient(135deg, #2563EB 0%, #6366F1 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      flexShrink: 0,
      boxShadow: '0 0 12px rgba(37,99,235,0.45)',
    }}
  >
    <HiSparkles size={14} />
  </div>
)
