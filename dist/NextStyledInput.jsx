import React from 'react';
import NextStyledButton from './NextStyledButton';
export var NextStyledInput = function (props) {
    var inputLabel = props.inputLabel, inputType = props.inputType, placeHolderText = props.placeHolderText, buttonTitle = props.buttonTitle, buttonSubmittingTitle = props.buttonSubmittingTitle, buttonStyles = props.buttonStyles, errorText = props.errorText, value = props.value, onChangeText = props.onChangeText, onSubmit = props.onSubmit, onBlur = props.onBlur, submitWithEnterKey = props.submitWithEnterKey, disabled = props.disabled, submitting = props.submitting, buttonDisabled = props.buttonDisabled, connectButton = props.connectButton, inputFieldStyles = props.inputFieldStyles, inputLabelStyles = props.inputLabelStyles, errorTextStyles = props.errorTextStyles, buttonHoverStyle = props.buttonHoverStyle;
    var darkThemeColor = "#3d3d3d";
    function saveButton() {
        return (<NextStyledButton title={buttonTitle} onClick={function () { return onSubmit(); }} submittingTitle={buttonSubmittingTitle} submitting={submitting} defaultStyle={buttonStyles} disabled={buttonDisabled} disabledStyle={props.buttonDisabledStyles} hoverStyle={buttonDisabled ? undefined : buttonHoverStyle}/>);
    }
    function didPressKey(e) {
        if (e.key === 'Enter') {
            if (submitWithEnterKey && onSubmit) {
                onSubmit();
            }
        }
    }
    return (<div className="sl-inputGroup">

            <style jsx>{"\n\n                .sl-inputGroup {\n                    width:100%;\n                  \n                }\n\n                \n                .sl-inputContainer {\n                    display: flex;\n                    flex-direction: row;\n                }\n\n                .sl-inputLabel {\n                    background: none;\n                    color: " + darkThemeColor + ";\n                    font-size: 11pt;\n                    margin-bottom: 10px;\n                    margin-left: 10px;\n                    text-align: left;\n                    font-weight: bold;\n                    " + inputLabelStyles + "\n                }\n\n\n                input {\n                    padding-left:15px;\n                    flex:1;\n                    display: flex;\n                    border:none;\n                    font-size: 16pt;\n                    color:" + darkThemeColor + ";\n                    font-weight: 400;\n\n                    " + inputFieldStyles + "\n                }\n\n                input:disabled{\n                    padding-left:15px;\n                    flex:1;\n                    display: flex;\n                    border:none;\n                    font-size: 16pt;\n                    padding-top: 20px;\n                    padding-bottom: 20px;\n                    background: white;\n                    height: 70px;\n                    color:rgba(0,0,0,0.5);\n                    font-weight: 400;\n                    " + inputFieldStyles + "\n                }\n\n                .sl-errorText {\n                    margin-top: 10px;\n                    margin-left: 10px;\n                    color: red;\n                    font-size: 11pt;\n                    " + errorTextStyles + "\n                  \n                    \n                }\n\n            "}</style>

            {inputLabel !== undefined &&
        <div className="sl-inputLabel">{inputLabel}</div>}

            <div className="sl-inputContainer">



                <input type={inputType ? inputType : "text"} style={connectButton && { paddingRight: props.buttonWidth + 10 }} onBlur={function () { return onBlur ? onBlur() : undefined; }} onChange={function (text) { return onChangeText(text.currentTarget.value); }} onKeyPress={function (e) { return didPressKey(e); }} value={value} disabled={disabled} placeholder={placeHolderText}>
                </input>

                {buttonTitle !== undefined && !connectButton &&
        saveButton()}

                {buttonTitle && connectButton &&
        <div style={{
            marginLeft: -props.buttonWidth,
        }}>
                        {saveButton()}
                    </div>}


            </div>

            <div className="sl-errorText">{errorText}</div>

        </div>);
};
/*
function areEqual(prevProps, nextProps) {
    return prevProps.value === nextProps.value
}

const MemoInput = React.memo(ReusableSingleLineInput, areEqual)
*/
export default NextStyledInput;
