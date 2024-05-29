const FloatBtn = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };

    return (
        <button
            className="fixed bottom-10 right-5 bg-green-600 text-white border-none rounded-full w-12 h-12 text-2xl cursor-pointer flex justify-center items-center shadow-md transition-colors duration-300 hover:bg-gray-500"
            onClick={scrollToTop}
        >
            &#9650;
        </button>
    );
};

export default FloatBtn;