import { Theme } from '@/theme';
import { CSSProperties } from 'react';

export interface ModuleCardProps {
	name: string;
	draft: boolean;
	isBonus?: boolean;
	pos: number;
	itemcount: number;
	id: string;
	totaltime: string;
	available: boolean;
	available_at: string;
	availableMessage: string;
	percentProgress: number;
	totalFinishedItems: number;
	expanded: boolean;
	toggleExpanded: () => void;
	customStyles: CSSProperties;
}

export interface ModuleCardStyleProps {
	theme?: Theme;
	isComplete?: boolean;
	customStyles?: CSSProperties;
}
