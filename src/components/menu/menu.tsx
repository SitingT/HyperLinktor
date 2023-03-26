// Menu.tsx
import React from "react";
import MenuItem from "./menuItem";

interface MenuProps {
  items: Array<{ key: string; label: string }>;
  onItemClick: (key: string) => void;
  backgroundColor: string;
}

const Menu: React.FC<MenuProps> = ({ items, onItemClick, backgroundColor }) => {
  const menuStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className="horizontal-bar" style={menuStyle}>
      {items.map((item) => (
        <MenuItem
          key={item.key}
          itemKey={item.key}
          label={item.label}
          onClick={onItemClick}
        />
      ))}
    </div>
  );
};

export default Menu;
