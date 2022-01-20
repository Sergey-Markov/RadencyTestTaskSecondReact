import PropTypes from "prop-types";

export default function CommunButton({
  children,
  onClick,
  className,
  disabled,
  active,
  ...otherProps
}) {
  return (
    <button
      {...otherProps}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
CommunButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};
CommunButton.defaultProps = {
  children: "Any Text",
  onClick: () => {},
  className: "",
  disabled: false,
  active: false,
};
