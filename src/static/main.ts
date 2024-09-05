import "./style.css";

import { updateCopyRightDate } from "./scripts/copyright";
import { addCursorListner } from "./scripts/cursor";
import { emailCopyToClipboard } from "./scripts/emailCopy";
import {
  addNavBackgroundListner,
  addScrollIndicatorListner,
} from "./scripts/scroll-handlers";
import { setupTestimonialsSlider } from "./scripts/slider";

document.addEventListener("DOMContentLoaded", () => {
  addCursorListner();
  addNavBackgroundListner();
  addScrollIndicatorListner();
  setupTestimonialsSlider();
  updateCopyRightDate();
  emailCopyToClipboard();
});
