<<<<<<< HEAD
export interface TypographyStylingProps {
    variant: 
        'h1-bold' | 
        'h2-bold' |
        'h3-bold' | 
        'h4-bold' |
        'h5-bold' | 
        'h6-bold' |
        'small-bold' | 
        'paragraph-bold' |
=======
import { Theme } from '../../theme';

export interface TypographyProps {
	content?: string;
	variant: Variant;
}
>>>>>>> 35266fa416f8ebda5186b42bcbe8bff5a91eb7d2

type Variant =
	| 'h1-bold'
	| 'h2-bold'
	| 'h3-bold'
	| 'h4-bold'
	| 'h5-bold'
	| 'h6-bold'
	| 'small-bold'
	| 'paragraph-bold'
	| 'h1-regular'
	| 'h2-regular'
	| 'h3-regular'
	| 'h4-regular'
	| 'h5-regular'
	| 'h6-regular'
	| 'small-regular'
	| 'paragraph-regular'
	| 'h1-italic'
	| 'h2-italic'
	| 'h3-italic'
	| 'h4-italic'
	| 'h5-italic'
	| 'h6-italic'
	| 'small-italic'
	| 'paragraph-italic';

<<<<<<< HEAD
        'h1-italic' | 
        'h2-italic' |
        'h3-italic' | 
        'h4-italic' |
        'h5-italic' | 
        'h6-italic' |
        'small-italic' | 
        'paragraph-italic' 
}

export interface TypographyProps extends TypographyStylingProps {
    content: string
}
=======
export interface TypographyStylesProps {
	variant: Variant;
	theme?: Theme;
}
>>>>>>> 35266fa416f8ebda5186b42bcbe8bff5a91eb7d2
