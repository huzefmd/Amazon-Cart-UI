import React from 'react'

function SideBar() {
    return (
      <aside className="border h-screen w-64">
        <div className="rounded m-5 bg-gray-300 p-4">
          <h2 className="text-black text-3xl">Your Wish List</h2>
          <br />
          <p>Default List</p>
        </div>
      </aside>
    );
  
}

export default SideBar