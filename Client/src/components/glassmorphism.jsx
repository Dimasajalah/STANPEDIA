import React from 'react';

function GlassmorphismTab() {
  return (
    <div className="bg-gradient-to-r from-[#00000022] via-[#00000044] to-[#00000066] p-8 w-1/2 m-auto mt-10 rounded-md shadow-lg">
      <div className="text-center">
        <h2 className="text-3xl text-white mb-4">Welcome to my website</h2>
        <p className="text-white text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis tincidunt ligula.
          Vestibulum vel lacinia odio. Suspendisse potenti. Fusce non odio eget libero eleifend fermentum.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default GlassmorphismTab;
