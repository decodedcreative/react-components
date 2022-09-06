import { ComponentStory, Meta } from '@storybook/react';
import { Typography } from './typography';

export default {
  component: Typography,
  title: 'Theme/Typography/Weights',
} as Meta;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Some text here',
};

export const Light = Template.bind({});
Light.args = {
  children: 'Some text here',
  weight: 'light',
};

export const Medium = Template.bind({});
Medium.args = {
  children: 'Some text here',
  weight: 'medium',
};

export const Bold = Template.bind({});
Bold.args = {
  children: 'Some text here',
  weight: 'bold',
};
