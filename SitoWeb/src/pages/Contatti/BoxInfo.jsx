import React from "react";

const container_style = "py-12 lg:max-w-xl";
const main_wrapper = "flex flex-col md:flex-row lg:flex-col gap-12";
const item_container = "flex md:flex-col lg:flex-row items-start gap-8";
const icon_circle =
  "flex-shrink-0 w-12 h-12 p-3 rounded-full bg-darkred/10 flex items-center justify-center text-darkred border border-darkred/10";
const text_line_style =
  "text-lg text-brown/70 font-light leading-snug hover:text-darkred transition-colors duration-300";

const sections = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Sede Vite Libere",
    lines: ["Via della Legalità, 12", "91100 Trapani (TP)", "Sicilia, Italia"],
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: "Email",
    lines: ["vitelibere08@gmail.com"],
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "Telefono",
    lines: ["+39 3453 334 989", "Lun–Ven · 9–18"],
  },
];

const BoxInfo = () => {
  return (
    <div className={container_style}>
      <div className={main_wrapper}>
        {sections.map((section, index) => (
          <div key={index} className={item_container}>
            <div className={icon_circle}>{section.icon}</div>

            <div className="flex flex-col">
              <h2 className="text-xl font-serif text-darkred mb-3 italic">
                {section.title}
              </h2>

              <div>
                {section.lines.map((line, lIdx) => (
                  <p key={lIdx} className={text_line_style}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxInfo;
