import React from 'react';

const UserAvatar = () => (
    <div className="w-24 h-24 md:w-40 md:h-40 rounded-full border-2 md:border-4 border-purple-500 overflow-hidden shadow-2xl mb-4 md:mb-6 mx-auto relative group bg-gray-800 shrink-0 transition-all duration-300">
        {/* User avatar - place 'avatar.jpg' in public folder */}
        <img src="/avatar.jpg" alt="Viktor Ralchenko" className="w-full h-full object-cover" />
    </div>
)

export default UserAvatar;
