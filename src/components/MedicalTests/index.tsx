import React from "react";
import "./MedicalReports.css";

const reportData = {
  "Complete Blood Count": [
    {
      test: "Hemoglobin (g/dL)",
      current: 12.9,
      previous: 8.8,
      normal: "12.0 - 15.0",
    },
    {
      test: "RBC (10^6/cu.mm)",
      current: 4.82,
      previous: 4.5,
      normal: "3.8 - 4.8",
    },
    { test: "HCT (%)", current: 38.2, previous: 27.1, normal: "36 - 46" },
    { test: "MCV (fL)", current: 79.4, previous: 60.1, normal: "83 - 101" },
    { test: "MCH (pg)", current: 26.8, previous: 19.5, normal: "27 - 32" },
    { test: "RDW-CV (%)", current: 16.2, previous: 18.7, normal: "11.5 - 14" },
    {
      test: "Total Leucocyte Count (10^3/µL)",
      current: 8.81,
      previous: 6.7,
      normal: "4 - 10",
    },
    {
      test: "Neutrophils (%)",
      current: 59.9,
      previous: 55.1,
      normal: "40 - 80",
    },
    {
      test: "Lymphocytes (%)",
      current: 28.9,
      previous: 36.5,
      normal: "20 - 40",
    },
    { test: "Monocytes (%)", current: 6.5, previous: 6.5, normal: "2 - 10" },
    { test: "Eosinophils (%)", current: 4.7, previous: 1.9, normal: "1 - 6" },
    { test: "Basophils (%)", current: 0, previous: 0, normal: "0 - 2" },
    {
      test: "Absolute Basophil Count (10^3/µL)",
      current: 0,
      previous: 0,
      normal: "0.02 - 0.1",
    },
    {
      test: "Platelet Count (10^3/µL)",
      current: 306,
      previous: 430,
      normal: "150 - 410",
    },
  ],

  "Inflammatory Markers": [
    {
      test: "Erythrocyte Sedimentation Rate (mm/hr)",
      current: 25,
      previous: 23,
      normal: "0 - 12",
    },
  ],

  "Iron Studies": [
    {
      test: "Iron Serum (µg/dL)",
      current: 42,
      previous: 13,
      normal: "50 - 170",
    },
    {
      test: "Total Iron Binding Capacity (µg/dL)",
      current: 277.51,
      previous: 366,
      normal: "250 - 460",
    },
  ],

  "Diabetes Profile": [
    { test: "HbA1c (%)", current: 5.4, previous: 5.3, normal: "4 - 5.6" },
    {
      test: "Glucose - Fasting (mg/dL)",
      current: 77,
      previous: 80,
      normal: "70 - 99",
    },
  ],

  "Kidney Function Test": [
    {
      test: "Creatinine (mg/dL)",
      current: 0.57,
      previous: 0.6,
      normal: "0.5 - 1.1",
    },
    {
      test: "Uric Acid (mg/dL)",
      current: 3.7,
      previous: 3.1,
      normal: "2.7 - 6.1",
    },
    {
      test: "Sodium (mEq/L)",
      current: 138,
      previous: 140,
      normal: "136 - 145",
    },
    {
      test: "Potassium (mEq/L)",
      current: 3.82,
      previous: 4.49,
      normal: "3.5 - 5.1",
    },
  ],

  "Lipid Profile": [
    {
      test: "Cholesterol - Total (mg/dL)",
      current: 195,
      previous: 153,
      normal: "<= 199.9",
    },
    {
      test: "Triglycerides (mg/dL)",
      current: 85,
      previous: 77,
      normal: "<= 149.9",
    },
    {
      test: "Cholesterol - HDL (mg/dL)",
      current: 57,
      previous: 43,
      normal: ">= 39.9",
    },
    {
      test: "Cholesterol - LDL (mg/dL)",
      current: 121,
      previous: 95,
      normal: "<= 99.9",
    },
    {
      test: "Non HDL Cholesterol (mg/dL)",
      current: 138,
      previous: 110,
      normal: "<= 129.9",
    },
  ],

  "Liver Function Test": [
    {
      test: "Bilirubin - Total (mg/dL)",
      current: 0.34,
      previous: 0.41,
      normal: "0.3 - 1.2",
    },
    {
      test: "Protein, Total (g/dL)",
      current: 7.86,
      previous: 7.2,
      normal: "5.7 - 8.2",
    },
    {
      test: "Albumin (g/dL)",
      current: 4.42,
      previous: 4.17,
      normal: "3.4 - 4.8",
    },
    { test: "SGOT (U/L)", current: 24, previous: 14, normal: "<= 34" },
    { test: "SGPT (U/L)", current: 12, previous: 10, normal: "10 - 49" },
    {
      test: "Alkaline Phosphatase (U/L)",
      current: 59,
      previous: 61,
      normal: "46 - 116",
    },
    { test: "GGT (U/L)", current: 16, previous: 13, normal: "0 - 37.9" },
  ],

  "Urine Routine & Microscopy": [
    {
      test: "Specific gravity",
      current: "1.005",
      previous: "1.005",
      normal: "1.003 - 1.035",
    },
    { test: "pH", current: "6.0", previous: "6.0", normal: "4.6 - 8" },
    {
      test: "Glucose",
      current: "Negative",
      previous: "Negative",
      normal: "Negative",
    },
    {
      test: "Protein",
      current: "Negative",
      previous: "Negative",
      normal: "Negative",
    },
    {
      test: "Ketones",
      current: "Negative",
      previous: "Negative",
      normal: "Negative",
    },
    {
      test: "Pus cells (/hpf)",
      current: "1-2",
      previous: "3-4",
      normal: "0 - 5",
    },
    {
      test: "Red blood cells (/hpf)",
      current: "Nil",
      previous: "2-3",
      normal: "0 - 2",
    },
    {
      test: "Epithelial cells (/hpf)",
      current: "1-2",
      previous: "3-4",
      normal: "Few",
    },
    { test: "Casts", current: "Nil", previous: "Nil", normal: "Nil" },
    { test: "Crystals", current: "Nil", previous: "Nil", normal: "Nil" },
  ],

  "Calcium and Bone Health": [
    {
      test: "Vitamin D (ng/mL)",
      current: 58.1,
      previous: 7.5,
      normal: "30 - 100",
    },
    {
      test: "Calcium (mg/dL)",
      current: 9.5,
      previous: 8.8,
      normal: "8.7 - 10.4",
    },
  ],

  "Vitamin Profile": [
    {
      test: "Vitamin B12 (pg/ml)",
      current: 445,
      previous: 298,
      normal: "211 - 911",
    },
  ],

  "Thyroid Function Test": [
    {
      test: "T3, Total (ng/mL)",
      current: 0.71,
      previous: 0.59,
      normal: "0.60 - 1.81",
    },
    {
      test: "T4, Total (µg/dL)",
      current: 5.7,
      previous: 5.9,
      normal: "4.5 - 12.6",
    },
    {
      test: "TSH (uIU/ml)",
      current: 2.097,
      previous: 2.195,
      normal: "0.55 - 4.78",
    },
  ],
};

// ✅ Utility function for out-of-range detection
function isOutOfRange(value, normal) {
  if (typeof value !== "number") return false;
  if (normal.includes("-")) {
    const [low, high] = normal.split("-").map((n) => parseFloat(n));
    return value < low || value > high;
  } else if (normal.includes("<=")) {
    const high = parseFloat(normal.replace("<=", "").trim());
    return value > high;
  } else if (normal.includes(">=")) {
    const low = parseFloat(normal.replace(">=", "").trim());
    return value < low;
  }
  return false;
}

export default function MedicalReport() {
  return (
    <div className="report-container">
      {Object.entries(reportData).map(([section, tests]) => (
        <div key={section} className="report-section">
          <h2>{section}</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Test</th>
                  <th>08-Sep-2025</th>
                  <th>25-May-2025</th>
                  <th>Normal Range</th>
                </tr>
              </thead>
              <tbody>
                {tests.map((t, i) => (
                  <tr key={i}>
                    <td>{t.test}</td>
                    <td
                      className={
                        isOutOfRange(parseFloat(t.current), t.normal)
                          ? "out"
                          : ""
                      }
                    >
                      {t.current}
                    </td>
                    <td
                      className={
                        isOutOfRange(parseFloat(t.previous), t.normal)
                          ? "out"
                          : ""
                      }
                    >
                      {t.previous}
                    </td>
                    <td>{t.normal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
