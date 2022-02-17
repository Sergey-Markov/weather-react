import { useDispatch } from "react-redux";
import countrySlice from "../../Redux/slices/countrySlice";
import weatherSlice from "../../Redux/slices/weatherSlice";
import { search } from "../../Repositoriys/search";
import { addCard } from "../../utils/addCard";
// import { addCard } from "../../utils/addCard";
import s from "./Form.module.css";

export default function Form({ onChange, query, clearInput }) {
  const dispatch = useDispatch();
  return (
    <form
      className={s.field}
      onSubmit={(e) => {
        addCard(query);
        clearInput();
        dispatch(countrySlice.actions.addCountry(query));
        e.preventDefault();
      }}
    >
      <input
        name="city"
        className={s.input}
        type="text"
        placeholder="Search..."
        autoComplete="on"
        onChange={(e) => onChange(e)}
        value={query}
        required
      />
      <button className={s.button} type="submit">
        Add
      </button>
    </form>
  );
}
