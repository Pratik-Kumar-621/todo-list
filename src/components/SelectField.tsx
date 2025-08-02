import { useState } from "react";

const SelectField = ({ formItem, setFormItem }: any) => {
  const options = [
    { name: "Pending", value: "pending", color: "#D0D0D0" },
    { name: "In Progress", value: "inProgress", color: "#FFB03C" },
    { name: "Completed", value: "completed", color: "#368A04" },
  ];
  const [showList, setShowList] = useState(false);

  return (
    <div className="selectfield">
      <div className="selectfield-value" onClick={() => setShowList(!showList)}>
        <div className="selectfield-value-content">
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
        <div
          className="todolist-heading-icon"
          style={{
            transform: showList ? "rotate(180deg)" : "rotate(0deg)",
            transition: "all .2s linear",
          }}
        >
          <svg
            fill="#034EA2"
            width="14px"
            height="14px"
            viewBox="0 -6 524 524"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>down</title>
            <path d="M64 191L98 157 262 320 426 157 460 191 262 387 64 191Z" />
          </svg>
        </div>
      </div>
      {showList && (
        <div className="selectfield-options">
          {options.map((item) => (
            <div
              key={item.value}
              className="selectfield-options-item"
              onClick={() => {
                setFormItem({ ...formItem, status: item.value });
                setShowList(false);
              }}
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
      )}
    </div>
  );
};

export default SelectField;
