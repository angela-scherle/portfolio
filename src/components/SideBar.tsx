import "../stylesheets/portfolioStyles.css";
import { useState } from "react";

interface SideBarProps {
  /*testProp: string;*/
  onSelectCategory: (category: string) => void;
}

function SideBar({ onSelectCategory }: SideBarProps) {
  return (
    <div className="sidebar">
      <button
        onClick={() => {
          onSelectCategory("all");
        }}
        className="category"
      >
        <p>all</p>
      </button>
      <button
        onClick={() => {
          onSelectCategory("print");
        }}
        className="category"
      >
        <p>print</p>
      </button>
      <button
        onClick={() => {
          onSelectCategory("lfp");
        }}
        className="category"
      >
        <p>lfp</p>
      </button>
      <button
        onClick={() => {
          onSelectCategory("video");
        }}
        className="category"
      >
        <p>video</p>
      </button>
    </div>
  );
}

export default SideBar;
