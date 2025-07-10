import React, { useId } from "react";

interface Props {
  onCheck: () => void;
  isInstantSearch: boolean;
}

function InstantSearch({ onCheck, isInstantSearch }: Props) {
  const id = useId();

  return (
    <div className="formControl">
      <label htmlFor={id} style={{ userSelect: "none" }}>
        <input 
        type="checkbox" 
        id={id} 
        onChange={onCheck} 
        defaultChecked={isInstantSearch}/> 인스턴트 서치
      </label>
    </div>
  );
}

export default InstantSearch;
