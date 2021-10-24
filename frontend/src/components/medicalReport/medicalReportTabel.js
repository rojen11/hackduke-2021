import { Divider } from "@mui/material";
import React from "react";
import style from "./medicalReport.module.scss";

export default function MedicalReportTabel() {
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
        <tr>
          <td>20 Oct, 2021</td>
          <td>Albendazole</td>
          <td>Dr. Lorem Ipsum</td>
          <td>20 Jan, 2022</td>
          <td></td>
        </tr>
        <Divider className={style.tableDivider} />

        <tr>
          <td>13 Aug, 2021</td>
          <td>DHPP Vaccine</td>
          <td>Dr. Lorem Ipsum</td>
          <td>01 Sept, 2022</td>
          <td></td>
        </tr>
        <Divider className={style.tableDivider} />

        <tr>
          <td>09 Jul, 2021</td>
          <td>Anti Rabies Injection</td>
          <td>Animal Pet Hospital</td>
          <td>15 Jul, 2022</td> <td></td>
          <td></td>
        </tr>
        <Divider className={style.tableDivider} />

        <tr>
          <td>01 Jul, 2020</td>
          <td>Anti Rabies Injection</td>
          <td>Animal Pet Hospital</td>
          <td>10 Jul, 2021</td> <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
