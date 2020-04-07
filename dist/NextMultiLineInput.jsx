import React from 'react';
export var NextMultiLineInput = function (props) {
    var inputLabel = props.inputLabel, className = props.className, placeHolderText = props.placeHolderText, height = props.height, maximumLength = props.maximumLength, disabled = props.disabled, errorText = props.errorText, value = props.value, onChangeText = props.onChangeText, onBlur = props.onBlur, inputLabelStyles = props.inputLabelStyles, inputFieldStyles = props.inputFieldStyles;
    return (<div className="ml-inputGroup">

            <style jsx>{"\n            .ml-inputGroup {\n                text-align: left;\n                display: flex;\n                flex: 1;\n                flex-direction: column;\n                height: auto; \n            }\n            \n            .ml-inputLabel {\n                background: none;\n                color: gray;\n                width: auto;\n              font-size: 11pt;\n              margin-left: 10px;\n              margin-bottom: 5px;\n                text-align: left;\n                align-items: center;\n                justify-content: flex-start;\n                font-weight: bold;\n                height: 21px;\n                " + (inputLabelStyles ? inputLabelStyles : "") + ";\n            }\n            \n            .ml-inputField {\n                padding-left:15px;\n                border:none;\n               font-size: 16pt;\n            padding-top: 10px;\n            padding-bottom: 10px;\n            height: 150px;\n            font-weight: 400;\n            color:gray;\n            " + (inputFieldStyles ? inputFieldStyles : "") + ";\n            }\n            \n        \n            \n            .ml-errorText {\n                margin-top: 10px;\n                margin-left: 10px;\n                color: red;\n                font-size: 11pt;\n                display: flex;\n                \n            }\n            \n            .ml-maximumLength {\n                margin-top: 8px;\n                font-size: 9pt;\n                text-align: right;\n                margin-right: 10px;\n            }\n            \n            @media only screen and (max-width: 600px) {\n            \n                .ml-inputGroup {\n                    height: auto;\n                }\n                \n                .ml-inputContainer {\n                    height: 60px;\n                }\n                \n                .ml-inputField {\n                    padding:15px;\n                    font-size: 11pt; \n                }\n            \n                .ml-errorText {\n                    margin-top: 10px;\n                    font-size: 11pt;\n                }\n            \n                \n            \n            }\n                \n            "}</style>

            {inputLabel !== undefined &&
        <div className="ml-inputLabel">{inputLabel}</div>}



            <textarea onBlur={function () { return onBlur ? onBlur() : undefined; }} onChange={function (text) { return onChangeText(text.currentTarget.value); }} value={value} disabled={disabled} className={className ? className : "ml-inputField"} style={{ height: height }} placeholder={placeHolderText}>
            </textarea>


            {maximumLength !== undefined &&
        <div className="ml-maximumLength">{maximumLength - (value ? value.length : 0)} chars remaining</div>}



            <div className="ml-errorText">{errorText}</div>

        </div>);
};
export default NextMultiLineInput;
