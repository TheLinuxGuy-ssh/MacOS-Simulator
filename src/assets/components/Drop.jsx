import { DropdownMenu, Button, Theme } from "@radix-ui/themes";
import LiquidGlass from "./LiquidGlass";

const DropItem = ({ children, shortcut, onClick }) => {
  return (
    <DropdownMenu.Item shortcut={shortcut} onClick={onClick}>
      {children}
    </DropdownMenu.Item>
  );
};

const DropSeparator = () => {
  return <DropdownMenu.Separator />;
};

const Drop = ({ title, children, color, size, variant, className }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button
          key={null}
          variant={variant == null ? "surface" : variant}
          color={color == null ? "gray" : color}
          size={size == null ? "1" : size}
          className={`topbar-btn ${className}`}
        >
          {title}
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        className={`topbar-dropdown topbar-dropdown-${className}`}>
        <LiquidGlass />
        {children}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export { DropItem, DropSeparator, Drop };
