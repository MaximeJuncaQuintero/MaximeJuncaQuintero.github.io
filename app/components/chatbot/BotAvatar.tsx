'use client'

import React from 'react';
import { FaRobot } from 'react-icons/fa';

export const BotAvatar = () => {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white">
      <FaRobot size={20} />
    </div>
  );
}; 