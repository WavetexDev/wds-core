export interface NotificationCardProps {
	title: string;
	message: string;
	sent_by: string;
	read: boolean;
	created_at: Date;
	onButtonClick: () => void;
	onMarkAsRead: () => void;
}
