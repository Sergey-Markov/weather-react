import s from "./ContainerForCards.module.css";
export default function ContainerForCards({ children }) {
  return <div className={s.field}>{children}</div>;
}
