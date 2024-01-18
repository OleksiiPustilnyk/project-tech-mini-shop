const getVariant = (variant?: VariantType) => {}

type VariantType =
    | 'primary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-success'
    | 'outline-primary'

export interface IButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children?: React.ReactNode
    variant?: VariantType
    square?: boolean
    paddingLess?: boolean
}
export const Button = ({
    className,
    children,
    variant,
    square,
    paddingLess,
    type = 'button',
    ...props
}: IButtonProps) => {
    return (
        <button
            {...props}
            type={type}
            className={`button
   
          ${getVariant(variant)}  transition duration-75  ${
              !paddingLess && 'py-2 px-4'
          }  ${!square && 'rounded-md'} active:scale-95 ${className} `}
        >
            {children}
        </button>
    )
}
