"use client";

import { Suspense } from "react";
import { useEffect, useState } from "react";

function FooterContent() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="wrapper">
      &copy; {currentYear} Projectory Inc. All rights reserved
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="border-t bg-muted/20 items-center justify-center py-4
      text-center text-sm text-gray-500"
    >
      <Suspense>
        <FooterContent />
      </Suspense>
    </footer>
  );
}
