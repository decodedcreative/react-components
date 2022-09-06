import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormItem } from './form-item';

export default {
  title: 'Theme/Forms/Form Item',
  component: FormItem,
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
  args: {},
} as ComponentMeta<typeof FormItem>;

const Template: ComponentStory<typeof FormItem> = (args) => (
  <FormItem {...args}></FormItem>
);

export const Default = Template.bind({});
Default.args = {};
