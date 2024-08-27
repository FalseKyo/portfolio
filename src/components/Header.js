import React from 'react';

const Header = () => {
    return (
        <header className="text-white bg-black py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-lg font-bold">Home</h1>
                <nav>
                    <a href="#aboutme" className="mx-5 hover:underline">Projects</a>
                    <a href="#work" className="mx-5 hover:underline">Certificates</a>
                    <a href="#contact" className="mx-5 hover:underline">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;