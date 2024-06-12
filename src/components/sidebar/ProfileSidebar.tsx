import React from 'react'; // Assuming you're using React
import imageUser from '../../assets/RegisterAgricultor.jpeg';

interface ProfileSidebarProps {
  email: string;
}

export const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ email }) => {
  
  return (
    <>
      <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
        <img
          src={imageUser}
          className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300"
          alt="Profile"
        />
        <h1 className="text-xl text-black font-bold">{email}</h1>
        <p className="bg-primary-100 py-2 px-4 rounded-full text-black">
          {email === 'ROOT' ? 'Administrador' : 'Usuario'}
        </p>
      </div>
    </>
  );
};
