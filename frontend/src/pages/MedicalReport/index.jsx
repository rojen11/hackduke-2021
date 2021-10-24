import { useEffect, useState } from "react";
import MedicalReportTabel from "../../components/medicalReport/medicalReportTabel";
import Axios from "../../utils/axios_token";
import style from "./medical.module.scss";

export default function MedicalReport() {
  const [reports, setReports] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    // Todo: Authorization header
    Axios.get("/api/medication/")
      .then((res) => setReports([...res.data]))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <MedicalReportTabel reports={reports} />
      <button className={style.addButton} onClick={() => setShow(!show)}>
        Add Medical
      </button>
    </div>
  );
}
