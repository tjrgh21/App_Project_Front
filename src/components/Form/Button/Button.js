// import exp from 'constants';
import { useNavigate } from 'react-router-dom';
import './Button.css';

const Button = ({
    title,
    explain,
    onClick,

    disabled,
    width,
    height,
    padding,
    wrapPadding,
    color,
    backgroundColor,
    fontWeight,
    fontSize,
    borderRadius,
    filter,

}) => {
    return (
        <div className='button-wrap' style={{ padding: wrapPadding }}>
            <button
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    padding: padding,
                    color: color,
                    backgroundColor: backgroundColor,
                    fontSize: fontSize,
                    fontWeight: `${fontWeight}`,
                    borderRadius: borderRadius,
                    filter: filter,
                }}
                onClick={onClick}
                disabled={disabled}
            >
                
                <span>{title}</span>
                
            </button>
        </div>
    );
};

export default Button;