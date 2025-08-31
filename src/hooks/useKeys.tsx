import { useWindowEvent } from "@mantine/hooks";
import { useRef, useState } from "react";

export enum CLICKED_KEY {
	MOUSE = "Mouse",
	CONTROL = "Control",
	SHIFT = "Shift",
}

export function useKeys() {
	// We need to use both a state object and a react reference.
	// The state object is so that the component using the hook
	// will rerender and the react reference is so that the
	// useWindowEvent hook is accurate.
	// If we update the state object, that change will not be
	// reflected inside the useWindowEvent hook unfortunately.
	const keysRef = useRef(new Set<string>());
	const [keys, SetKeys] = useState<Set<string>>(new Set<string>());

	useWindowEvent("mousedown", () => {
		keysRef.current.add(CLICKED_KEY.MOUSE);

		SetKeys(keysRef.current);
	});

	useWindowEvent("mouseup", () => {
		keysRef.current.delete(CLICKED_KEY.MOUSE);

		SetKeys(keysRef.current);
	});

	useWindowEvent("keydown", (e) => {
		if (e.key === CLICKED_KEY.CONTROL) {
			keysRef.current.add(CLICKED_KEY.CONTROL);

			SetKeys(keysRef.current);
		}

		if (e.key === CLICKED_KEY.SHIFT) {
			keysRef.current.add(CLICKED_KEY.SHIFT);

			SetKeys(keysRef.current);
		}
	});

	useWindowEvent("keyup", (e) => {
		keysRef.current.delete(e.key);

		SetKeys(keysRef.current);
	});

	return keys;
}
