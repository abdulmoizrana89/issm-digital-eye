import { useEffect, useState } from "react";

const useMeasure = (ref: any) => {
  const [element, attachEle] = useState<any>(null);
  const [bounds, setBounds] = useState({});
  useEffect(() => {
    function onResize([entry]) {
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
