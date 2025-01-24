import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    setSearchQuery(e.target.value);
    if (searchQuery.trim()) {
      navigate("/", { state: { query: searchQuery.trim() } });
    }
  };

  return (
    <>
      <div className="d-lg-block d-xl-block d-xxl-block d-none">
        <div className="  P-5 overflow-hidden w-[35px] h-[35px] hover:w-[270px] bg-white shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:duration-300 duration-300">
          <div className="flex items-center justify-center fill-orange-500 relative left-[6px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Isolation_Mode"
              data-name="Isolation Mode"
              viewBox="0 0 24 24"
              width={22}
              height={22}
            >
              <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleKeyDown} 
            className="outline-none text-[20px] bg-transparent w-full text-orange-500 font-normal px-4"
          />
        </div>
      </div>
      <div className="d-md-none d-lg-none d-xl-none d-xxl-none">
        <div className="form relative top-2">
          <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1"></button>
          <input
            type="text"
            value={searchQuery}
            onChange={handleKeyDown} 
            className="input rounded-full px-2 py-1 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
            placeholder="Search..."
            required
            
          />
          <button type="reset" className="  relative right-8 top-1 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-95000 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
