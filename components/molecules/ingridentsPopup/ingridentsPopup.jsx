import React from "react";
import styles from "./ingridentsPopup.module.css";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Label,
} from "recharts";
import Button from "../../atoms/button/button.jsx";
const IngridentsPopupInfo = ({
  isSummaryPage = false,
  btnText1 = "Order plate",
  btnText2 = "Log My plate",
  ingridentsInfo,
  onLogMyPlate,
  onOrderPlate,
}) => {
  const {
    nutritionalInfo: {
      calories: calories,
      carbs: carbs,
      fat: fat,
      protein: protein,
    },
  } = ingridentsInfo;
  const chartData = [
    { name: "carbs", value: parseInt(carbs) },
    { name: "fat", value: parseInt(fat) },
    { name: "protein", value: parseInt(protein) },
    { name: "cal", value: parseInt(calories) },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className={styles.ingridents_container}>
      <section className={styles.indridents_info_sec}>
        <div className={styles.chart_sec}>
          <ResponsiveContainer
            height={100}
            width="100%"
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
              <Pie
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                data={chartData}
                innerRadius="90%"
                outerRadius="100%"
                fill="#8884d8"
                cornerRadius={100}
                paddingAngle={0}
                dataKey="value"
              >
                <Label
                  value={calories}
                  position="centerBottom"
                  fontSize="20px"
                  style={{ fontWeight: 600 }}
                />
                <Label
                  value="cal"
                  position="centerTop"
                  fontSize="14px"
                  style={{ fontWeight: 400 }}
                />
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className={styles.details_sec}>
          <p className={styles.g_info}>{carbs} g</p>
          <p className={styles.carbs_info}>Carbs</p>
        </div>
        <div className={styles.details_sec}>
          <p className={styles.g_info}>{fat} g</p>
          <p className={styles.carbs_info}>Fat</p>
        </div>
        <div className={styles.details_sec}>
          <p className={styles.g_info}>{protein} g</p>
          <p className={styles.carbs_info}>Protein</p>
        </div>
      </section>
      <section className={styles.btn_section}>
        {isSummaryPage && (
          <Button
            className={styles.btn1}
            text={btnText2}
            onClickHandler={onOrderPlate}
          />
        )}
        <Button
          onClickHandler={onLogMyPlate}
          className={isSummaryPage ? styles.btn2 : styles.singlebtn}
          text={btnText1}
        />
      </section>
    </div>
  );
};

export default IngridentsPopupInfo;
