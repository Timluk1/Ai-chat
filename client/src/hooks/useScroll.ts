import { useEffect, RefObject } from "react";

export const useScroll = <T extends HTMLElement>(
    bottomRef: RefObject<T>,
    addiction: unknown
) => {
    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [addiction]);
    return bottomRef;
};
