import { useDispatch } from "react-redux";
import countrySlice from "../../Redux/slices/countrySlice";
import weatherSlice from "../../Redux/slices/weatherSlice";
import { search } from "../../Repositoriys/search";
// import { addCard } from "../../utils/addCard";
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
        onClick={async (e) => {
          await search(e, query, dispatch, clearInput);
          // addCard();
          dispatch(countrySlice.actions.addCountry(query));
        }}
      >
        Add
      </button>
    </div>
  );
}
