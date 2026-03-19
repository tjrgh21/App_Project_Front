import './Content.css';

const Content = ({
    children,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    gap,
    border,
    flexDirection,
    position,

    styles,

    className,

    onClick,
}) => {
    return (
        <div
            className={className ? className : 'content-container'}
            style={{
                flexDirection: flexDirection == 'row' ? 'row' : 'column',
                paddingLeft: `${paddingLeft}px`,
                paddingRight: `${paddingRight}px`,
                paddingTop: `${paddingTop}px`,
                paddingBottom: `${paddingBottom}px`,
                gap: `${gap}px`,
                borderBottom: border ? border : 'none',
                position: position ? position : 'static',
                ...styles,
            }}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Content;