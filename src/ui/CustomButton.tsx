import { Button, ButtonProps } from "@material-tailwind/react"

export const CustomButtom = ({
    variant,
    size,
    color,
    fullWidth,
    ripple,
    className,
    action,
    children
}: ButtonProps & { action: () => void }) => {
    return (
        <Button size={size}
            color={color}
            fullWidth={fullWidth}
            ripple={ripple}
            className={className}
            children={children}
            variant={variant}
            onClick={action}
        ></Button>
    )
}