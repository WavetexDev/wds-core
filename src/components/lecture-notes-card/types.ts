export interface LectureNotesCardProps {
	modname: string;
	modid: string;
	itemname: string;
	itemid: string;
	itemtype: LectureType;
	crsid: string;
	classid: string;
	notes: Note[];
	lastNote: string;
}

interface Note {
	date: number;
	note: string;
}

type LectureType = 'VIDEO' | 'AUD' | 'TXT' | 'MAT';
