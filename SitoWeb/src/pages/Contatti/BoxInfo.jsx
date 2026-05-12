import React from "react";

const container_style = "pt-2 pb-12 md:py-12 lg:max-w-xl";
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
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 30C25.5228 30 30 25.5228 30 20C30 14.4771 25.5228 10 20 10C14.4771 10 10 14.4771 10 20C10 25.5228 14.4771 30 20 30ZM20 26.6667C23.6818 26.6667 26.6667 23.6818 26.6667 20C26.6667 16.3181 23.6818 13.3333 20 13.3333C16.3181 13.3333 13.3333 16.3181 13.3333 20C13.3333 23.6818 16.3181 26.6667 20 26.6667Z"
          fill="#6A0F1C"
        />
        <path
          d="M30 8.33337C29.0795 8.33337 28.3334 9.07957 28.3334 10C28.3334 10.9205 29.0795 11.6667 30 11.6667C30.9205 11.6667 31.6667 10.9205 31.6667 10C31.6667 9.07957 30.9205 8.33337 30 8.33337Z"
          fill="#6A0F1C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.75656 7.12673C1.66663 9.26584 1.66663 12.0661 1.66663 17.6666V22.3333C1.66663 27.9338 1.66663 30.7341 2.75656 32.8731C3.71529 34.7548 5.24509 36.2846 7.12673 37.2433C9.26584 38.3333 12.0661 38.3333 17.6666 38.3333H22.3333C27.9338 38.3333 30.7341 38.3333 32.8731 37.2433C34.7548 36.2846 36.2846 34.7548 37.2433 32.8731C38.3333 30.7341 38.3333 27.9338 38.3333 22.3333V17.6666C38.3333 12.0661 38.3333 9.26584 37.2433 7.12673C36.2846 5.24509 34.7548 3.71529 32.8731 2.75656C30.7341 1.66663 27.9338 1.66663 22.3333 1.66663H17.6666C12.0661 1.66663 9.26584 1.66663 7.12673 2.75656C5.24509 3.71529 3.71529 5.24509 2.75656 7.12673ZM22.3333 4.99996H17.6666C14.8114 4.99996 12.8704 5.00256 11.3701 5.12513C9.90869 5.24453 9.16136 5.46094 8.64003 5.72658C7.38561 6.36574 6.36574 7.38561 5.72658 8.64003C5.46094 9.16136 5.24453 9.90869 5.12513 11.3701C5.00256 12.8704 4.99996 14.8114 4.99996 17.6666V22.3333C4.99996 25.1886 5.00256 27.1295 5.12513 28.6298C5.24453 30.0913 5.46094 30.8386 5.72658 31.36C6.36574 32.6143 7.38561 33.6341 8.64003 34.2733C9.16136 34.539 9.90869 34.7555 11.3701 34.8748C12.8704 34.9973 14.8114 35 17.6666 35H22.3333C25.1886 35 27.1295 34.9973 28.6298 34.8748C30.0913 34.7555 30.8386 34.539 31.36 34.2733C32.6143 33.6341 33.6341 32.6143 34.2733 31.36C34.539 30.8386 34.7555 30.0913 34.8748 28.6298C34.9973 27.1295 35 25.1886 35 22.3333V17.6666C35 14.8114 34.9973 12.8704 34.8748 11.3701C34.7555 9.90869 34.539 9.16136 34.2733 8.64003C33.6341 7.38561 32.6143 6.36574 31.36 5.72658C30.8386 5.46094 30.0913 5.24453 28.6298 5.12513C27.1295 5.00256 25.1886 4.99996 22.3333 4.99996Z"
          fill="#6A0F1C"
        />
      </svg>
    ),
    title: "Il Nostro Instagram",
    lines: ["@vite_libere →"],
    src: "https://www.instagram.com/vite_libere?igsh=d3pxY3E3b3J0ZWht"
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
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8" />
        <path d="M8 17h5" />
      </svg>
    ),
    title: "P. IVA",
    lines: ["02458960812"],
  },
];

const BoxInfo = () => {
  return (
    <div className={container_style}>
      <div className={main_wrapper}>
        {sections.map((section, index) => (
          <div key={index} className={item_container}>
            {section.src ? (
              <a
                href={section.src}
                target="_blank"
                rel="noopener noreferrer"
                className="flex md:flex-col lg:flex-row items-start gap-8"
              >
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
              </a>
            ) : (
              <>
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
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxInfo;
