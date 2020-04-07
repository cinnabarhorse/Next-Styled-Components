interface Props {
    inputType?: "text" | "password";
    inputLabel?: string | undefined;
    placeHolderText: string;
    buttonTitle?: string | Element;
    buttonSubmittingTitle?: string | Element;
    errorText?: string | undefined;
    value: string;
    onChangeText: (text: string) => void;
    onSubmit?: () => void;
    onBlur?: () => void;
    submitWithEnterKey?: boolean;
    disabled?: boolean;
    submitting?: boolean | undefined;
    buttonDisabled?: boolean;
    connectButton?: boolean;
    buttonWidth?: number;
    buttonStyles?: any;
    buttonHoverStyle?: string;
    inputFieldStyles: string;
    inputLabelStyles?: string;
    buttonDisabledStyles?: string;
    errorTextStyles?: string;
}
export declare const NextStyledInput: (props: Props) => any;
export default NextStyledInput;
