// MenuItem.tsx
import React from "react";

interface MenuItemProps {
  itemKey: string;
  label: string;
  onClick: (key: string) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ itemKey, label, onClick }) => {
  return (
    <div className="menu-item" onClick={() => onClick(itemKey)}>
      {label}
    </div>
  );
};

export default MenuItem;
