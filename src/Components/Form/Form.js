import s from "./Form.module.css";

export default function Form() {
  return (
    <div>
      <input className={s.input} type="text" placeholder="Search..." />
    </div>
  );
}
