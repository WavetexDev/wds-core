import { Theme } from '@/theme';

export interface ModuleCardProps {
	name: string;
	draft: boolean;
	is_default: boolean;
	isBonus: boolean;
	expire: number;
	pos: number;
	itemcount: number;
	id: string;
	totaltime: string;
	available: boolean;
	available_at: string;
	availableMessage: string;
	percentProgress: number;
	totalFinishedItems: number;
	expanded: boolean
}

export interface ModuleCardStyleProps {
	theme?: Theme;
	isComplete?: boolean;
}
