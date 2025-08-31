import { LoadingOverlay } from "@mantine/core";
import { useEffect, useRef, useState } from "react";

export function Loader() {
	const SHOW_AFTER_X_MS = 750;

	const [show, SetShow] = useState(false);
	const mounted = useRef(false);

	useEffect(() => {
		mounted.current = true;

		if (!show) {
			setTimeout(() => {
				if (!mounted.current) {
					return;
				}

				SetShow(true);
			}, SHOW_AFTER_X_MS);
		} else {
			clearTimeout(undefined);
		}

		return () => {
			mounted.current = false;
		};
	});

	return (
		<LoadingOverlay
			visible={show}
			loaderProps={{ size: "xl", color: "pink", variant: "bars" }}
			overlayOpacity={0.3}
		/>
	);
}
