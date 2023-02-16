import React from "react";
import styles from "./SubtmitButton.module.css";
export default function SubmitButton({ type, onClick, nome }) {
  return (
    <>
      <button className={styles.Button} type={type} onClick={onClick}>
        {nome}
      </button>
    </>
  );
}
