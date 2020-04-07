interface NextStyledButtonProps {
    title: string | Element;
    onClick: () => void;
    submittingTitle?: string | Element;
    titleStyles?: string;
    icon?: string | Element;
    iconPosition?: "left" | "right";
    iconStyle?: string;
    iconHoverStyle?: string;
    defaultStyle: string;
    additionalStyles?: string;
    hoverStyle?: string;
    activeStyle?: string;
    disabled?: boolean;
    disabledStyle?: string;
    submitting?: boolean;
}
export declare const NextStyledButton: (props: NextStyledButtonProps) => any;
export default NextStyledButton;
