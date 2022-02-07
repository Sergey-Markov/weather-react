import s from "./Container.module.css";

export default function Container({ children }) {
  return <div className={s.field}>{children}</div>;
}
