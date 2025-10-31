import { useState, useEffect, useRef } from "react"; 

export default function SortDropdown({setSortMethod, getTeller}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedText, setSelectedText] = useState("Sort By");
  const dropdownRef = useRef(null);

  const options = [
    "Sort By",
    "Release Date (Asc)",
    "Release Date (Desc)",
    "Rating (Asc)",
    "Rating (Desc)",
  ];

  const handleSelect = (option) => {
    setSelectedText(option);
    setSortMethod(getTeller(option));
    setIsOpen(false);
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropDown" onClick={() => setIsOpen(!isOpen)} ref={dropdownRef}>
      <div className="wrapper">
        <div className="selected" >
          {selectedText}
        </div>
        <i className={`ri-arrow-drop-down-fill arrow ${isOpen ? "open" : ""}`}></i>
      </div>

      <div className={`filterList ${isOpen ? "show" : ""}`}>
        {options.map((option) => (
          <div className="items" key={option} onClick={() => handleSelect(option)}>
            <div className="filterItemsText">{option}</div>
          </div>
        ))}
      </div>
    </div>
  );
}