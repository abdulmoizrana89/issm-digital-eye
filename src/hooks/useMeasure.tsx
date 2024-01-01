import { useEffect, useState } from "react";

// TODO: revisit and verify the types
interface Measure {
  height: number;
  width: number;
}

const useMeasure = (ref: any) => {
  const [element, attachEle] = useState<HTMLElement | null | any>(null);
  const [bounds, setBounds] = useState<Measure>({ width: 0, height: 0 });
  useEffect(() => {
    function onResize([entry]: ResizeObserverEntry[]) {
      setBounds({
        height: entry.contentRect.height,
        width: entry.contentRect.width,
      });
    }

    const observer = new ResizeObserver(onResize);

    if (element && element.current) {
      observer.observe(element.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [element]);

  useEffect(() => {
    if (ref.current) {
      attachEle(ref);
    }
  }, [ref.current]);

  return bounds;
};

export default useMeasure;
