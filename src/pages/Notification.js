import { Popover } from "antd";
import { BellOutlined } from "@ant-design/icons";
import "./Notification.css";

const content = (
  <div>
    <div style={{ backgroundColor: "#FDFD96", padding: "8px" }}>
      <p style={{ margin: 0 }}>Eriselda Hoxha ka dorezuar "Sistemi I menaxhimit te diplomave", Kontrolli III</p>
      <p style={{ textAlign: "right", fontSize: "8px", margin: 0 }}>11/07/2022</p>
    </div>
    <div style={{ backgroundColor: "#FDFD96", padding: "8px" }}>
      <p style={{ margin: 0 }}>Eriselda Hoxha ka dorezuar "Sistemi I menaxhimit te diplomave", Kontrolli II</p>
      <p style={{ textAlign: "right", fontSize: "8px", marginTop: 0 }}>11/07/2022</p>
    </div>
    <div style={{ padding: "8px" }}>
      <p style={{ margin: 0 }}>Eriselda Hoxha ka dorezuar "Sistemi I menaxhimit te diplomave", Kontrolli I</p>
      <p style={{ textAlign: "right", fontSize: "8px", marginTop: 0 }}>11/07/2022</p>
    </div>
  </div>
);
const Notification = () => {
  const handleNotificationsClick = () => {
    console.log("here");
  };
  return (
    <div style={{ position: "relative", margin: 0 }}>
      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          backgroundColor: "red",
          height: "1.2rem",
          width: "1.2rem",
          right: "-0.4rem",
          top: "-0.35rem",
          color: "white",
          textAlign: "center",
          fontSize: "1rem",
        }}
      >
        {notifications.filter((n) => 1n.isRead).length}
      </div>
      <Popover
        placement="rightBottom"
        title={<div style={{ padding: "8px" }}>Njoftime</div>}
        content={content}
        arrow={{ pointAtCenter: true }}
        style={{ padding: "0px" }}
      >
        <BellOutlined style={{ fontSize: "30px" }} onClick={handleNotificationsClick} />
      </Popover>
    </div>
  );
};

export default Notification;
