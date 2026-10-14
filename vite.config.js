import react from "@vitejs/plugin-react";
import { codessinAnchors } from "@codessin/anchors";

// One line. Inert unless CODESSIN_CAPTURE=1, so normal builds are unchanged.
export default {
  plugins: [react(), codessinAnchors.vite()],
};
