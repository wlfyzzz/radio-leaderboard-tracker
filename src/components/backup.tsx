import React from "react";

const KickStreamWindow: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 999999,
        backgroundColor: "black",
        border: "2px solid lime",
        width: "400px",
        height: "280px",
      }}
    >
      <iframe
        src="https://player.kick.com/radiobtw"
        title="Kick Stream"
        allowFullScreen
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </div>
  );
};

export default KickStreamWindow;
