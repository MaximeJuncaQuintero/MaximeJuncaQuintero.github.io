'use client'

import React from 'react';
import { FaUser } from 'react-icons/fa';

export const UserAvatar = () => {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-white">
      <FaUser size={18} />
    </div>
  );
}; 