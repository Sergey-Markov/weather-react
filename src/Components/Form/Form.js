import s from "./Form.module.css";

export default function Form({ onChange, query, search }) {
  return (
    <div className={s.field}>
      <input
        name="city"
        className={s.input}
        type="text"
        placeholder="Search..."
        autoComplete="on"
        onChange={(e) => onChange(e)}
        value={query}
        onKeyPress={(e) => search(e)}
      />
      <button className={s.button} type="submit" onClick={(e) => search(e)}>
        Add
      </button>
    </div>
  );
}
