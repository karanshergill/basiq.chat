import type { Decorator } from '@storybook/react';

import '../../../apps/meteor/app/theme/client/main.css';
import 'highlight.js/styles/github.css';
import '@rocket.chat/icons/dist/rocketchat.css';

export const parameters = {
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators: Decorator[] = [
	(Story) => (
		<div>
			<style>{`
				body {
					background-color: white;
				}
			`}</style>
			<Story />
		</div>
	),
];
export const tags = ['autodocs'];
