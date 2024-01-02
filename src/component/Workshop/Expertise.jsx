export default function Expertise() {
    return (
      <div className="w-full flex bg-gray-200 flex-col justify-center items-center min-h-[50vh] py-5">
        <h1 className="text-center font-Poppins font-bold text-xl md:text-3xl mb-10 text-zinc-700">
          Expert Talks from Academic & Industry: Elevating Your Understanding
        </h1>
        <div className="flex flex-col text-zinc-600 font-medium text-md px-5 md:text-lg">
          <span>How to accelerate your Business Model with Generative Al?</span>
          <span>Can Langchain be used in production?</span>
          <span>
            Beyond Tables and Vectors: Knowledge Graphs for Al Reasoning?
          </span>
          <span>How to Build an Intelligent QA Chatbot with LLMs?</span>
          <span>How to make your RAG mode production ready?</span>
        </div>
      </div>
    );
  }
  