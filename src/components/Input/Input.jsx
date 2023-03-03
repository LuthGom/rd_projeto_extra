import styles from "./Input.module.css";

export default function Input({
  label,
  type,
  name,
  id,
  placeholder,
  onChange,
  value
}) {
  return (
    <span className={styles.container}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        className={styles.Input}
          value={value}
      />
    </span>
  );
}
