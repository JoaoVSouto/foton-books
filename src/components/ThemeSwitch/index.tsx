import { useState } from 'react';
import Switch from 'react-switch';

import useTheme from 'hooks/useTheme';

export default function ThemeSwitch() {
  const { changeTheme, theme } = useTheme();

  const [isChecked, setIsChecked] = useState(theme === 'dark');

  function handleThemeChange(checkState) {
    if (checkState) {
      changeTheme('dark');
    } else {
      changeTheme('light');
    }

    setIsChecked(checkState);
  }

  return (
    <label title="Toggle light theme">
      <Switch
        aria-label="Toggle light theme"
        checked={isChecked}
        onChange={handleThemeChange}
        onHandleColor="#ff6978"
        checkedIcon={<i className="theme-icon">🌜</i>}
        activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
        uncheckedIcon={<i className="theme-icon">🌞</i>}
        offColor="#333"
        onColor="#000"
      />
    </label>
  );
}
