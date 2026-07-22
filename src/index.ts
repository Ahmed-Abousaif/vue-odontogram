import type { App, Plugin } from "vue";
import Odontogram from "./components/Odontogram.vue";
import { getViewBox } from "./getViewBox";
import "./styles.css";

export { Odontogram, getViewBox };
export type * from "./types";

export default Odontogram;

export const VueOdontogram: Plugin = {
	install(app: App) {
		app.component("Odontogram", Odontogram);
	},
};
