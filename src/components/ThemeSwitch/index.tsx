import { useState } from 'react';
import Switch from 'react-switch';

export default function ThemeSwitch() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label title="Toggle light theme">
      <Switch
        aria-label="Toggle light theme"
        checked={isChecked}
        onChange={setIsChecked}
        checkedIcon={<i className="theme-icon">🌜</i>}
        activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
        uncheckedIcon={<i className="theme-icon">🌞</i>}
        offColor="#333"
        onColor="#333"
      />
    </label>
  );
}
