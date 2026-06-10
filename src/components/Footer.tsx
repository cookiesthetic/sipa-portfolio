import React from "react";

export default function Footer() {
  return (
    <footer className="bg-muted w-full py-12 px-6 border-t-4 border-black mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center w-full gap-6">
        <div className="font-heading font-black text-3xl text-foreground">
          Olivia
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a className="font-sans font-bold text-muted-foreground hover:text-black transition-colors" href="#">LinkedIn</a>
          <a className="font-sans font-bold text-muted-foreground hover:text-black transition-colors" href="#">GitHub</a>
          <a className="font-sans font-bold text-muted-foreground hover:text-black transition-colors" href="#">Dribbble</a>
          <a className="font-sans font-bold text-muted-foreground hover:text-black transition-colors" href="#">Twitter</a>
        </div>
        <div className="font-sans text-muted-foreground font-bold text-center md:text-right">
          © 2024 Muhammad Ganang Ramadhan. Built with Neubrutalism.
        </div>
      </div>
    </footer>
  );
}
