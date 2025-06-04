import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-xs md:text-sm">
      <p>
        Copyright © 2024-{new Date().getFullYear()} <br /> Kim Minsu All rights
        reserved
      </p>
    </footer>
  );
}
