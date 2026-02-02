"use client";

export default function Footer() {
  return (
    <footer
      className="border-t bg-muted/20 items-center justify-center py-4
      text-center text-sm text-gray-500"
    >
      <div className="wrapper ">
        &copy; {new Date().getFullYear()} Projectory Inc. All rights reserved
      </div>
    </footer>
  );
}
