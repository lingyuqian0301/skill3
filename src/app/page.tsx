import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        This project was generated by{" "}
        <a href="https://www.dhiwise.com" style={{ color: "#87CEFA", textDecoration: "none" }}>
          Dhiwise
        </a>
        . Quickly use the links below to navigate through all pages.
      </p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/dashboard">
            <a style={{ color: "#87CEFA", textDecoration: "none" }}>Dashboard</a>
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/accountsettings">
            <a style={{ color: "#87CEFA", textDecoration: "none" }}>Account Settings</a>
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/newskill">
            <a style={{ color: "#87CEFA", textDecoration: "none" }}>New Skill</a>
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/home1">
            <a style={{ color: "#87CEFA", textDecoration: "none" }}>Home1</a>
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/openforevent">
            <a style={{ color: "#87CEFA", textDecoration: "none" }}>Open for Event</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
