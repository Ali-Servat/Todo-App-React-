const FilterButtons = ({ FILTER_NAMES, setFilterType, filterType }) => {
     const filterButtons = FILTER_NAMES.map((button) => {
          return (
               <button
                    onClick={() => setFilterType(button)}
                    key={button}
                    className={filterType === button ? 'active' : null}
               >
                    {button}
               </button>
          );
     });
     return <div className="filter-buttons">{filterButtons}</div>;
};

export default FilterButtons;
