import React from "react";

const SelectField = ({ formItem, setFormItem }: any) => {
  const options = [
    { name: "Pending", value: "pending", color: "#D0D0D0" },
    { name: "In Progress", value: "inProgress", color: "#FFB03C" },
    { name: "Completed", value: "completed", color: "#368A04" },
  ];
  return (
    <div className="selectfield">
      <div className="selectfield-value">
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: options.find((item) => item.value === formItem.status)
              ?.color,
          }}
        ></div>
        {options.find((item) => item.value === formItem.status)?.name}
      </div>
      <div className="selectfield-options">
        {options.map((item) => (
          <div
            key={item.value}
            className="selectfield-options-item"
            onClick={() => setFormItem({ ...formItem, status: item.value })}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: item.color,
              }}
            ></div>{" "}
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectField;
