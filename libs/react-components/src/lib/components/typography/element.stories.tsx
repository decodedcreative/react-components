import { ComponentStory, Meta } from '@storybook/react';
import { Typography } from './typography';

export default {
  component: Typography,
  title: 'Theme/Typography/Element',
} as Meta;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Some text here',
};

export const H1 = Template.bind({});
H1.args = {
  children: 'XxxL Typography',
  size: 'xxxl',
};
H1.storyName = 'H1';

export const H2 = Template.bind({});
H2.args = {
  children: 'XxL Typography',
  size: 'xxl',
};
H2.storyName = 'H2';

export const H3 = Template.bind({});
H3.args = {
  children: 'Lg Typography',
  size: 'lg',
};
H3.storyName = 'H3';
