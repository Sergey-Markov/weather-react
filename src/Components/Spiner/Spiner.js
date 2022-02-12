import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Audio } from "react-loader-spinner";

import s from "./Spiner.module.css";
export default function Spiner() {
  return (
    <div className={s.spiner_centr}>
      <Audio heigth="100" width="100" color="#459de9" ariaLabel="loading" />;
    </div>
  );
}
