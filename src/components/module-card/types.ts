import { Theme } from '@/theme';

export interface ModuleCardProps {
	name: string;
	draft: false;
	is_default: true;
	isBonus: false;
	expire: number;
	pos: number;
	itemcount: number;
	id: string;
	totaltime: string;
	available: true;
	available_at: string;
	availableMessage: string;
	percentProgress: number;
	totalFinishedItems: number;
	items: [];
}

export interface ModuleCardStyleProps {
	theme?: Theme;
	isComplete?: boolean;
}
