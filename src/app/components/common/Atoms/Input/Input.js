export default function Input({
  type = "text",
  label,
  id,
  labelClassName = "",
  inputClassName = "",
  ...props
}) {
  if (label) {
    return (
      <label htmlFor={id} className={labelClassName}>
        <input
          id={id}
          type={type}
          className={inputClassName}
          {...props}
        />
        {label}
      </label>
    );
  }

  return (
    <input
      id={id}
      type={type}
      className={inputClassName}
      {...props}
    />
  );
}
