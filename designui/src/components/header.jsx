import React from "react";

function Header() {
  return (
    <div class='text-white flex justify-between m-4'>
      <div class='flex'>
        <p
          class='mr-4 pr-2'
          style={{ border: 0, borderRight: "1px solid white" }}>
          Help & Contact{" "}
        </p>
        <p>Join our Forum </p>
      </div>

      <div class='flex mr-8 content-center' style={{justifyContent:"center",alignContent:"center",alignItems:"center"}}>
        <p
          class='pr-2 mr-2'
          style={{ border: 0, borderRight: "1px solid white" }}>
          Login
        </p>
        <p>Sign up</p>

        <div class="ml-2">
          <div style={{ width: 20, height: 3, background: "white" ,margin:2 }}></div>
          <div style={{ width: 20, height: 3, background: "white" ,margin:2 }}></div>

          <div style={{ width: 20, height: 3, background: "white",margin:2  }}></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
