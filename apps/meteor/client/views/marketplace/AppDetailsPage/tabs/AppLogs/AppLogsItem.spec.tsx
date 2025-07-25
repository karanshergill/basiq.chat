import { mockAppRoot } from '@rocket.chat/mock-providers';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import * as stories from './AppLogsItem.stories';

const testCases = Object.values(composeStories(stories)).map((Story) => [Story.storyName || 'Story', Story]);

test.each(testCases)(`renders AppLogsItem without crashing`, async (_storyname, Story) => {
	const view = render(<Story />, { wrapper: mockAppRoot().build() });
	expect(view.baseElement).toMatchSnapshot();
});

test.each(testCases)('AppLogsItem should have no a11y violations', async (_storyname, Story) => {
	const { container } = render(<Story />, { wrapper: mockAppRoot().build() });

	const results = await axe(container);
	expect(results).toHaveNoViolations();
});
