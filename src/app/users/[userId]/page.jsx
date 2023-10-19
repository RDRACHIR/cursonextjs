"use client";
import { useParams } from "next/navigation";

function Userpage() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <button
        onClick={() => {
          console.log("Works!!!");
        }}
      >
        Click
      </button>
    </div>
  );
}

export default Userpage;
