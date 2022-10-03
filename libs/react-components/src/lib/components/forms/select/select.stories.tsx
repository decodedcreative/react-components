import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './select';

export default {
  title: 'Theme/Forms/Select',
  component: Select,
  parameters: {
    backgrounds: {
      default: 'Light',
      values: [
        { name: 'Light', value: '#ffffff' },
        { name: 'Dark', value: '#161b2f' },
      ],
    },
  },
  argTypes: {},
  args: {
    'aria-invalid': false,
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = ({ children, ...args }) => (
  <Select {...args}>
    <option key={1} value="1">
      Option 1
    </option>
    <option key={2} value="2">
      Option 2
    </option>
    <option key={3} value="3">
      Option 3
    </option>
    <option key={4} value="4">
      Option 4
    </option>
  </Select>
);
export const Default = Template.bind({});
Default.args = {};

export const Error = Template.bind({});
Error.args = {
  'aria-invalid': true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
