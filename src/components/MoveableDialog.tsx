import { Dialog } from "@mantine/core";
import { useElementSize, useWindowEvent } from "@mantine/hooks";
import { useRef, useState } from "react";

interface MoveableDialogProps {
	opened: boolean;
	CloseFn: () => void;
}

export function MoveableDialog(
	props: React.PropsWithChildren<MoveableDialogProps>
) {
	const bIsMouseDownRef = useRef(false);

	const windowSize = useRef({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	const { ref: dialogRef } = useElementSize<HTMLDivElement>();

	const xRef = useRef(20);
	const yRef = useRef(20);
	const [coords, SetCoords] = useState({ x: 20, y: 20 });

	useWindowEvent("mouseup", () => {
		bIsMouseDownRef.current = false;
	});

	useWindowEvent("resize", () => {
		windowSize.current.width = window.innerWidth;
		windowSize.current.height = window.innerHeight;

		// Create an offset for the width that accounts for the width of the dialog.
		// We want to compare the right side of the dialog to the edge of the screen
		// instead of the left.
		const offsetWidth =
			windowSize.current.width - dialogRef.current.clientWidth;

		// Create an offset for the height that accounts for the height of the dialog.
		// We want to compare the bottom side of the dialog to the edge of the screen
		// instead of the top.
		const offsetHeight =
			windowSize.current.height - dialogRef.current.clientHeight;

		// If the left side of the dialog was pushed off the screen, move it right onto the screen.
		if (xRef.current < 0) {
			xRef.current = 0;
		}

		// If the right side of the dialog was pushed off the screen, move it left onto the screen.
		if (xRef.current > offsetWidth) {
			xRef.current = offsetWidth;
		}

		// If the top side of the dialog was pushed off the screen, move it down onto the screen.
		if (yRef.current < 0) {
			yRef.current = 0;
		}

		// If the bottom side of the dialog was pushed off the screen, move it up onto the screen.
		if (yRef.current > offsetHeight) {
			yRef.current = offsetHeight;
		}

		SetCoords({ x: xRef.current, y: yRef.current });
	});

	useWindowEvent("mousemove", (e) => {
		if (!bIsMouseDownRef.current) {
			return;
		}

		let xCoords = xRef.current + e.movementX;
		let yCoords = yRef.current + e.movementY;

		// Create an offset for the width that accounts for the width of the dialog.
		// We want to compare the right side of the dialog to the edge of the screen
		// instead of the left.
		const offsetWidth =
			windowSize.current.width - dialogRef.current.clientWidth;

		// Create an offset for the height that accounts for the height of the dialog.
		// We want to compare the bottom side of the dialog to the edge of the screen
		// instead of the top.
		const offsetHeight =
			windowSize.current.height - dialogRef.current.clientHeight;

		// We should not let the dialog move in the X direction when the dialog is at the edge of the screen.
		if (0 <= xCoords && xCoords <= offsetWidth) {
			// We should not let the dialog move in the X direction when the mouse is outside of the screen.
			if (0 <= e.clientX && e.clientX <= windowSize.current.width) {
				xRef.current = xCoords;
			}
		}

		// We should not let the dialog move in the Y direction when the dialog is at the edge of the screen.
		if (0 <= yCoords && yCoords <= offsetHeight) {
			// We should not let the dialog move in the Y direction when the mouse is outside of the screen.
			if (0 <= e.clientY && e.clientY <= windowSize.current.height) {
				yRef.current = yCoords;
			}
		}

		SetCoords({ x: xRef.current, y: yRef.current });
	});

	return (
		<Dialog
			ref={dialogRef}
			opened={props.opened}
			onClose={props.CloseFn}
			withCloseButton
			radius="md"
			onMouseDown={() => (bIsMouseDownRef.current = true)}
			position={{
				left: coords.x,
				top: coords.y,
			}}
			sx={{
				WebkitUserSelect: "none",
				msUserSelect: "none",
				userSelect: "none",
			}}
		>
			{props.children}
		</Dialog>
	);
}
