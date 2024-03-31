const Loading = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen text-center text-primary-foreground bg-primarey dark:bg-primary dark:text-primary-foreground">
      <div className="loading">
        {/* SVG path to display a loading animation */}
        <svg version="1.2" width="600" height="300" xmlns="http://www.w3.org/2000/svg">
          <path
            id="pulsar"
            stroke="var(--primary-foreground)"
            strokeWidth="1"
            strokeLinejoin="round"
            d="M0,90L250,90Q257,60 262,87T267,95 270,88 273,92t6,35 7,-60T290,127 297,107s2,-11 10,-10 1,1 8,-10T319,95c6,4 8,-6 10,-17s2,10 9,11h210"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
