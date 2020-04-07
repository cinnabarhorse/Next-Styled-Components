import React, { useState } from "react";
export var NextStyledButton = function (props) {
    var title = props.title, titleStyles = props.titleStyles, onClick = props.onClick, icon = props.icon, iconPosition = props.iconPosition, iconStyle = props.iconStyle, iconHoverStyle = props.iconHoverStyle, disabled = props.disabled, disabledStyle = props.disabledStyle, defaultStyle = props.defaultStyle, hoverStyle = props.hoverStyle, activeStyle = props.activeStyle, additionalStyles = props.additionalStyles, submitting = props.submitting, submittingTitle = props.submittingTitle;
    var _a = useState(false), hovering = _a[0], setHovering = _a[1];
    return (<a role="button" tabIndex={0} onClick={function () {
        disabled ? undefined : onClick();
    }} onMouseEnter={function () { return setHovering(true); }} onMouseLeave={function () { return setHovering(false); }}>

            <style jsx>
                {"\n                \n                a {\n                    cursor:" + (disabled ? "default" : "pointer") + ";\n                    display:flex;\n                    align-items:center;\n                    text-align:center;\n                    justify-content:center;\n                    " + defaultStyle + ";\n                    " + additionalStyles + ";\n                    " + (disabled ? disabledStyle : undefined) + "\n                }\n\n                .titleStyle {\n                    " + titleStyles + "\n                }\n\n                .icon {\n                    " + iconStyle + "\n                    " + (hovering ? iconHoverStyle : undefined) + "\n                }\n\n\n                @media (hover: hover) {\n                    a:hover {\n                       " + (!disabled && hoverStyle) + "\n                    }\n\n                    \n                  }\n               \n\n                a:active {\n                    " + (!disabled && activeStyle) + "\n                }\n\n\n                "}
            </style>


            <div style={{ display: 'flex', alignItems: 'center' }}>

                {iconPosition === "left" &&
        <span className="icon">{icon}</span>}

                <span className="titleStyle">{submitting ? submittingTitle : title}</span>

                {iconPosition === "right" &&
        <span className="icon">{icon}</span>}

            </div>


        </a>);
};
export default NextStyledButton;
