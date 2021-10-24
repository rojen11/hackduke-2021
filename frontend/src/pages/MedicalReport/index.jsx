import { useEffect, useState } from "react";
import MedicalReportTabel from "../../components/medicalReport/medicalReportTabel";
import Axios from "../../utils/axios_token";

export default function MedicalReport() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Todo: Authorization header
    Axios.get("/api/medication/")
      .then((res) => setReports([...res.data]))
      .catch((e) => console.log(e));
  }, []);

  return <MedicalReportTabel reports={reports} />;
}
