import "./styles.css";
import { useToggle } from "../../hooks/useToggle";

export default function CustomHook() {
  // ✅ Use the custom hook inside this component
  const [isOn, toggle] = useToggle(false);

  return (
    /* your toggle function for the onClick method */
    <button data-testid="toggle-button" onClick={toggle}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}
