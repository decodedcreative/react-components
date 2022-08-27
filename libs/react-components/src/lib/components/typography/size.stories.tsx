import { ComponentStory, Meta } from '@storybook/react';
import Typography from './typography';

export default {
  component: Typography,
  title: 'Theme/Typography/Sizes',
} as Meta;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Some text here',
};

export const Xs = Template.bind({});
Xs.args = {
  children: 'Xs Typography',
  size: 'xs',
};
Xs.storyName = 'XS';

export const Sm = Template.bind({});
Sm.args = {
  children: 'Sm Typography',
  size: 'sm',
};
Sm.storyName = 'SM';

export const Md = Template.bind({});
Md.args = {
  children: 'Md Typography',
};

Md.storyName = 'MD';

export const Lg = Template.bind({});
Lg.args = {
  children: 'Lg Typography',
  size: 'lg',
};
Lg.storyName = 'LG';

export const Xl = Template.bind({});
Xl.args = {
  children: 'Xl Typography',
  size: 'xl',
};
Xl.storyName = 'XL';

export const TwoXl = Template.bind({});
TwoXl.args = {
  children: 'XXL Typography',
  size: 'xxl',
};
TwoXl.storyName = 'XXL';

export const ThreeXl = Template.bind({});
ThreeXl.args = {
  children: 'XXL Typography',
  size: 'xxxl',
};
ThreeXl.storyName = 'XXXL';
