import { useEffect, useState } from "react";
import MedicalReportTabel from "../../components/medicalReport/medicalReportTabel";
import Axios from "axios";

export default function MedicalReport() {
  const [reports, setReports] = useState([]);


  useEffect(() => {
    // Todo: Authorization header
    Axios.get("/api/medication/", {
      headers: {
        "Authorization": ``,
      },
    })
      .then((res) => setReports([...res.data]))
      .catch((e) => console.log(e));
  }, []);

  return <MedicalReportTabel reports={reports} />;
}
