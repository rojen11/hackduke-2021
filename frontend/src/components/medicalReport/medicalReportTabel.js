import { Divider } from "@mui/material";
import React from "react";
import style from "./medicalReport.module.scss";

export default function MedicalReportTabel(props) {
  const { reports } = props;

    

  return (
    <table class={style.medTable}>
      <thead className={style.medTableHead}>
        <tr>
          <th>Date</th>
          <th>Medication/Injection</th>
          <th>Vet/Hospital</th>
          <th>Next Due Date</th>
          <th>Remind Me?</th>
        </tr>
      </thead>
      <tbody>
        {reports.map((r) => (
          <React.Fragment key={r.id}>
            <tr>
              <td>{r.last_date}</td>
              <td>{r.medication}</td>
              <td>{r.vet}</td>
              <td>{r.next_date}</td>
              <td>{r.remind ? "Yes" : "No"}</td>
            </tr>
            <Divider className={style.tableDivider} />
          </React.Fragment>
        ))}

    
      </tbody>
    </table>
  );
}
