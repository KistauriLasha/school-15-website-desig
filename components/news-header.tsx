// components/news-header.tsx

const NewsHeader = () => {
  return (
    <div className="bg-[#4A90E2] py-20 text-center text-white">
      <div className="container mx-auto">
        <h1 className="flex items-center justify-center text-5xl font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-4 h-12 w-12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Z" />
            <path d="M16 2v20" />
            <path d="M8 7h4" />
            <path d="M8 12h4" />
            <path d="M8 17h4" />
          </svg>
          Новости школы
        </h1>
        <p className="mt-4 text-lg">
          Последние события, достижения учеников и важные мероприятия нашей школы
        </p>
      </div>
    </div>
  );
};

export default NewsHeader;
