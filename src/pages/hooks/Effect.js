import Effect, { Layer } from "../../features/Hooks/Effect";
import { useState } from "react";

export default function EffectPage() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    // setter는 함수를 사용 할 수 있다 !
    // setToggle((toggle) => {
    //   return !toggle;
    // });
  };
  return (
    <>
      <Effect onToggle={handleToggle} />
      <Layer toggle={toggle} />
      {/* {  toggle && <Layer toggle={toggle} />} */}
    </>
  );
}
