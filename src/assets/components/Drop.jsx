import { DropdownMenu, Button, Theme } from '@radix-ui/themes';

const Drop = ({ title, children, color, size, variant}) => {
    return (
           <DropdownMenu.Root>
	<DropdownMenu.Trigger>
		<Button variant={variant == null ? "surface" : variant} color={color == null ? "gray" : color} size={size == null ? "1" : size}>
			{title}
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		{children}
	</DropdownMenu.Content>
</DropdownMenu.Root>

    );
}

export default Drop;