import { Meta } from "@storybook/react"
import Input, { InputProps } from "../../../../components/atoms/Input"

// Create design in storybook dashboard
export default {
    title: 'Components/Atoms/Input',
    component: Input
} as Meta

const Template = (args: InputProps) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
    label: "Nama lengkap"
}