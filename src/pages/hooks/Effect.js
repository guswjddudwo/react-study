import Effect, { Layer } from "../../features/Hooks/Effect";
import { useState, useCallback } from "react";

export default function EffectPage() {
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);

  // 함수 자체를 메모리 영역에 저장 (참조 주소가 바뀌지 않게 됨)
  const handleToggle = useCallback(() => {
    // 랜더링 최적화 할때 중요한 방법
    setToggle((toggle) => !toggle);
    setCount((count) => count + 1);

    // setter는 함수를 사용 할 수 있다 !
    // setToggle((toggle) => {
    //   return !toggle;
    // });
  }, []);
  return (
    <>
      <Effect onToggle={handleToggle} />
      <Layer toggle={toggle} count={count} />
      {/* {  toggle && <Layer toggle={toggle} />} */}
    </>
  );
}
