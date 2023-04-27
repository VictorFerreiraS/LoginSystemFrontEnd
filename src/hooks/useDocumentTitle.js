import { useEffect, useRef } from "react";

function useDocumentTitle(title, prevailOnUnmount = false) {
  const defaltTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaltTitle.current;
      }
    },
    []
  );
}

export default useDocumentTitle;
