import styles from "./Button.module.css";

import { format } from "date-fns";

function Button(props) {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.error}
    >
      {format(new Date(2014, 1, 11), "yyyy-MM-dd")} - {props.children}
    </button>
  );
}

export default Button;
