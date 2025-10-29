import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Minimize2, Maximize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const KickStreamWindow: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  if (isClosed) return null;

  const content = (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 999999999,
        backgroundColor: "#111",
        color: "#fff",
        border: "1px solid #333",
        borderRadius: "8px",
        width: isCollapsed ? "250px" : "400px",
        height: isCollapsed ? "50px" : "280px",
        overflow: "hidden",
        boxShadow: "0 0 20px rgba(0,0,0,0.6)",
        transition: "all 0.3s ease",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#222",
          borderBottom: "1px solid #333",
          padding: "6px 10px",
        }}
      >
        <span style={{ fontSize: "14px", fontWeight: 600 }}>Live Stream</span>
        <div style={{ display: "flex", gap: "4px" }}>
          <Button
            variant="ghost"
            size="icon"
            style={{ height: "24px", width: "24px" }}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? (
              <Maximize2 className="w-3 h-3" />
            ) : (
              <Minimize2 className="w-3 h-3" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            style={{ height: "24px", width: "24px" }}
            onClick={() => setIsClosed(true)}
          >
            <X className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {/* Stream */}
      {!isCollapsed && (
        <iframe
          src="https://player.kick.com/radiobtw"
          title="Kick Stream"
          allowFullScreen
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            display: "block",
          }}
        />
      )}
    </div>
  );

  return ReactDOM.createPortal(content, document.body);
};

export default KickStreamWindow;
