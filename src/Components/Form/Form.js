import { useDispatch } from "react-redux";
import { search } from "../../Repositoriys/search";
import s from "./Form.module.css";

export default function Form({ onChange, query, clearInput }) {
  const dispatch = useDispatch();
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
        onKeyPress={(e) => {
          search(e, query, dispatch, clearInput);
        }}
      />
      <button
        className={s.button}
        type="submit"
        onClick={(e) => {
          search(e, query, dispatch, clearInput);
        }}
      >
        Add
      </button>
    </div>
  );
}
