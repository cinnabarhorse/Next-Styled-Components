interface Props {
    inputLabel: string | undefined;
    placeHolderText: string;
    height: number;
    maximumLength?: number;
    disabled?: boolean;
    className?: string;
    errorText?: string | undefined;
    value: string;
    onChangeText: (text: string) => void;
    onBlur?: () => void;
    inputLabelStyles?: string;
    inputFieldStyles?: string;
}
export declare const NextMultiLineInput: (props: Props) => any;
export default NextMultiLineInput;
