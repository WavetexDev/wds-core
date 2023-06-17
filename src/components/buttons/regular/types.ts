export interface RegularButtonStylingProps {
    variant: 
        'primary-contained' | 
        'primary-ghost' | 
        'primary-text' |

        'secondary-contained' | 
        'secondary-ghost' | 
        'secondary-text'
}

export interface RegularButtonProps extends RegularButtonStylingProps {
    content: string
}