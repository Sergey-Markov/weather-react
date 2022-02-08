import s from "./Form.module.css";

export default function Form() {
  return (
    <div className={s.field}>
      <input
        name="city"
        className={s.input}
        type="text"
        placeholder="Search..."
        autoComplete="on"
      />
      <button className={s.button} type="submit">
        Add
      </button>
    </div>
  );
}
