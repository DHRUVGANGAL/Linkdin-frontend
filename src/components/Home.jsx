import React, { useState } from 'react';
import { Boxes } from "./ui/background-boxes";
import { cn } from '../utils/cn';

const Home = () => {
  return (
    <div className="h-screen w-full relative overflow-hidden bg-slate-900 flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />

     

      
      <form
        className="relative z-20 mt-8 w-full max-w-md bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 shadow-lg"
        onSubmit={(e) => e.preventDefault()} 
      >
         <h1 className="md:text-4xl text-xl text-center text-white relative z-20 mb-4">
        LinkedIn Post Generator
           </h1>
        <div className="flex flex-col space-y-4">
         
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Post Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="e.g., '10 Tips for Better React Code'"
              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-md text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-2 px-4 rounded-md hover:opacity-90 transition-opacity duration-200"
          >
            Create Post
          </button>
        </div>
      </form>
      
      
    </div>
  );
};

export default Home;