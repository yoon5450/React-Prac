import { useEffect, useLayoutEffect } from "react";

function Parents() {
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  });

  useEffect(() => {
    console.log("useEffect");
  });

  console.log("render");

  return <div></div>;
}
export default Parents;
