import { DropdownMenu, Button, Theme } from "@radix-ui/themes";


const DropItem = ({ children, shortcut }) => {
  return (
      <DropdownMenu.Item shortcut={shortcut}>{children}</DropdownMenu.Item>
  );
};

const DropSeparator = () => {
  return (
  <DropdownMenu.Separator />
);
}

const Drop = ({ title, children, color, size, variant, className }) => {
  return (
    
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button
          variant={variant == null ? "surface" : variant}
          color={color == null ? "gray" : color}
          size={size == null ? "1" : size}
          className={`topbar-btn ${className}`}
        >
          {title}
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="topbar-dropdown">{children}</DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export {
  DropItem,
  DropSeparator,
  Drop
}
