import s from "./SunCard.module.css";
export default function SunCard() {
  return (
    <div className={`${s.field} + ${s}`}>
      <p>My Card</p>
    </div>
  );
}
