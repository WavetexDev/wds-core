import { AvatarProps } from '@/components/Avatar/avatar.props';

declare module '@waveclass/wds-core' {
	export const Avatar = (
		props: AvatarProps
	): JSX.Element => {};
}
