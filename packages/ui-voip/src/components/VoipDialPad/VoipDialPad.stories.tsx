import { Box } from '@rocket.chat/fuselage';
import type { Meta, StoryFn } from '@storybook/react';

import VoipDialPad from './VoipDialPad';

export default {
	title: 'Components/VoipDialPad',
	component: VoipDialPad,
	decorators: [
		(Story) => (
			<Box maxWidth={248}>
				<Story />
			</Box>
		),
	],
} satisfies Meta<typeof VoipDialPad>;

export const DialPad: StoryFn<typeof VoipDialPad> = () => {
	return <VoipDialPad value='' onChange={() => undefined} />;
};
