import React from 'react'
import { useLocation } from 'react-router'

const item_container = "flex items-center gap-4 md:gap-2 lg:gap-4"
const section_container = "mx-auto gap-8 w-max md:w-auto grid justify-center grid-cols-2 md:flex md:flex-wrap items-start md:items-center justify-center gap-4 xl:gap-8  md:px-4 lg:px-16 xl:px-32 divide-darkred md:py-20 pb-12 md:pb-28"
const line_style = "w-8 lg:w-12 xl:w-20 hidden md:block h-px"


const workflow = [
  { id: 1, name: "Livello" },
  { id: 2, name: "Personalizza" },
  { id: 3, name: "Riepilogo" },
  { id: 4, name: "Certificato" },
]


const stepMap = {
  "/adotta": 1,
  "/adotta/personalizza": 2,
  "/adotta/riepilogo": 3,
  "/adotta/certificato": 4
};


const WorkflowItem = ({ id, name, currentStep }) => {
  const isCompleted = id < currentStep;
  const isCurrent = id === currentStep;

  const circle_style = `
    border-[1.5px] w-10 lg:w-12 aspect-square rounded-full flex justify-center items-center duration-500
    ${isCompleted ? "bg-darkred text-white border-transparent" : "bg-transparent text-darkred border-darkred/75"}
    ${isCurrent ? "ring-4 ring-darkred/10 border-darkred font-bold" : ""}
  `;

  return (
    <article className={item_container}>
      <div className={circle_style}>
        {isCompleted ? (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : (
          <span>{id}</span>
        )}
      </div>
      <h5 className={`font-medium duration-500 ${isCurrent || isCompleted ? "text-darkred" : "text-darkred/40"}`}>
        {name}
      </h5>
    </article>
  );
}


const AdottaWorkflow = () => {
  
  const location = useLocation();
  const currentStep = stepMap[location.pathname] || 1;

  return (
    <section className={section_container}>
      
      {workflow.map((item) => (
        <React.Fragment key={item.id}>
          <WorkflowItem 
            id={item.id} 
            name={item.name} 
            currentStep={currentStep}
          />
          
          {item.id !== workflow.length && (
            <div className={`
              ${line_style} 
              ${item.id < currentStep ? "bg-darkred" : "bg-darkred/20"}
            `}></div>
          )}
        </React.Fragment>
      ))}

    </section>
  )
}

export default AdottaWorkflow