import { type RefObject } from "react";

interface Props {
  placeholder: string;
  ref: RefObject<HTMLInputElement | null>
}

const Child = ({ placeholder, ref }:Props) => {
  const handleFoucus = () => {
    console.log(ref);
  };

  return (
    <input
      ref={ref}
      onClick={handleFoucus}
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Child;


// const Child = forwardRef<HTMLInputElement, Props>(({ placeholder }, ref) => {
//   const handleFoucus = () => {
//     console.log(ref);
//   };

//   return (
//     <input
//       ref={ref}
//       onClick={handleFoucus}
//       type="text"
//       placeholder={placeholder}
//     />
//   );
// });

// export default Child;