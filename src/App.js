import Header from "./component/Header";
import Main from "./component/Main";
import datas from "./data.json";
import React from "react";

function App() {
  const [data, setData] = React.useState(datas);
  const [filters, setFilter] = React.useState([]);

  React.useEffect(() => {
    setData(datas);
  }, []);

  const filterFunc = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }

    const keywordList = [role, level];
    if (languages) {
      keywordList.push(...languages);
    }

    if (tools) {
      keywordList.push(...tools);
    }

    return filters.every((filter) => keywordList.includes(filter));
  };

  const handleTagClick = (tag) => {
    setFilter([...filters, tag]);
  };

  const handlefilterCancel = (inputFilter) => {
    setFilter(filters.filter((f) => f !== inputFilter));
  };

  const clearAllFilter = () => {
    setFilter([]);
  };

  const filteredJob = data.filter(filterFunc);

  const jobItems = filteredJob.map((item) => {
    return (
      <Main
        key={item.id}
        company={item.company}
        image={item.logo}
        featured={item.featured}
        new={item.new}
        position={item.position}
        postedAt={item.postedAt}
        contract={item.contract}
        location={item.location}
        level={item.level}
        role={item.role}
        languages={item.languages}
        tools={item.tools}
        handleTagClick={handleTagClick}
      />
    );
  });

  return (
    <div>
      <Header />
      <div className="hero-box">
        {filters.length > 0 && (
          <div className="tag-container">
            {filters.map((filter, index) => (
              <div key={index} className="tag">
                <span className="tag-name">{filter}</span>
                <span
                  className="cancel"
                  onClick={() => handlefilterCancel(filter)}
                >
                  X
                </span>
              </div>
            ))}
            <input type="text" className="tag-input" />
            <h4 className="reset" onClick={clearAllFilter}>
              Clear
            </h4>
          </div>
        )}
        {jobItems}
      </div>
    </div>
  );
}

export default App;
