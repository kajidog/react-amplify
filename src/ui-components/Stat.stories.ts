import Stat from "../ui-components/Stat";
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ui-component/stat',
  component: Stat,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    initialValue: { control: 'color' },
  },
} satisfies Meta<typeof Stat>;

export default meta;

type Story = StoryObj<typeof Stat>

export const Default: Story = {
  args: {
    initialValue: "40",
    pasent: "+40%",
    callback: () => { }
  },
};
