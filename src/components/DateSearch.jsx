import React from "react";

function DateSearch(){
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }

        // this is where custom logic goes
        console.log("SEARCHED Event:");
        console.log(input.value.trim());
        //

        input.value = "";
      }}>
        <input placeholder="mission date" ref={node => {
          input = node;
        }}></input>
        <button>search</button>
      </form>
    </div>
  );
}

export default DateSearch;
