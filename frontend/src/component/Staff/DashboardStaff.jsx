import React from "react";
import DashboardStaffNavbar from "./DashboardStaffNavbar";
import StaffSidebar from "./StaffSidebar";

export default function DashboardStaff() {
  return (
    <div style={styles.container}>
      <div style={styles.navbar}>
        <DashboardStaffNavbar />
      </div>
      <div style={styles.content}>
        <StaffSidebar />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    padding:"0"
    
  },
  navbar: {
    flex: "0 0 auto", 
  },
  content: {
    display: "flex",
    flex: 1,
    overflowX: "auto", 
  },
};
