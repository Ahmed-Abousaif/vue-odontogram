export type Layout = "circle" | "square";
export type ShowHalf = "full" | "upper" | "lower";

export function getViewBox(layout: Layout, showHalf: ShowHalf): string {
	if (layout === "square") {
		if (showHalf === "upper") {
			return "0 0 900 75";
		}
		if (showHalf === "lower") {
			return "0 75 900 75 ";
		}

		return "0 0 900 150";
	}

	const full = "0 0 409 694";
	const upper = "0 0 409 347";
	const lower = "0 347 409 347";

	if (showHalf === "upper") {
		return upper;
	}
	if (showHalf === "lower") {
		return lower;
	}
	return full;
}
