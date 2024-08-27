import React from 'react';
import ProfileImage from '../assets/profile.jpg';  // Ensure the correct path

const MainSection = () => {
    return (
        <div className="bg-black text-white text-center p-20">
            <img src={ProfileImage} alt="Profile" className="mx-auto rounded-full w-48 h-48 object-cover" />
            <h1 className="text-4xl font-bold">Hello World!</h1>
            <h2 className="text-3xl font-semibold text-blue-600">I'm Jacob</h2>
            <p className="mt-2">A student from University of Mindanao.</p>
            <div className="mt-4">
                <button className="bg-pink-600 rounded px-6 py-2 mx-2 hover:bg-pink-700">Download CV</button>
                <button className="border border-pink-600 text-pink-600 rounded px-6 py-2 mx-2 hover:bg-pink-600 hover:text-white">View Resume</button>
            </div>
        </div>
    );
};

export default MainSection;