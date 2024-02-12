import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/themeContext';


const ToggleContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin: 10px;
`;

const Slider = styled.span<{ theme: 'day' | 'night' }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => (theme === 'day' ? '#32a5ed' : '#d93025')};
  transition: .4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
    transform: ${({ theme }) => (theme === 'day' ? 'translateX(0)' : 'translateX(26px)')};
  }
`;

const Icon = styled.div<{ theme: 'day' | 'night' }>`
  position: absolute;
  transform: translateY(-50%);
  color: ${({ theme }) => (theme === 'day' ? '#f1c40f' : '#f39c12')};

  // Position the sun icon on the left and moon icon on the right
  ${({ theme }) => (theme === 'day' ? 'left: 8px;' : 'right: 8px;')}
`;

const Checkbox = styled.input`
  opacity: 0;
  width: 10px;
  height: 10px;
`;

// DayNightToggle component
const DayNightToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleContainer>
      <Checkbox
        type="checkbox"
        checked={theme === 'night'}
        onChange={toggleTheme}
      />
      <Slider theme={theme} />
      <Icon theme={theme}>
        {theme === 'day' ? <FaSun size={20} /> : <FaMoon size={20} />}
      </Icon>
    </ToggleContainer>
  );
};

export default DayNightToggle;