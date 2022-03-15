import React, { useState, useEffect, useCallback, useRef } from "react";

function Datos () {
  const [query, setQuery] = useState("");
  const [hits, setHits] = useState([]);
  const [filteredHits, setFilteredHits] = useState([] || JSON.parse("users"));
  const searchEl = useRef(null);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const fetchUsers = useCallback(
    function fetchUsers () {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          setHits(data);
          const users = window.localStorage.setItem("users", JSON.stringify(hits));
          setFilteredHits(users);
        });
    },
    // eslint-disable-next-line
    []
  );

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    let filteredHits = hits;
    if (query && hits.length > 0) {
      filteredHits = hits.filter((i) => {
        const regex = new RegExp(query, "ig");
        return i.name.match(regex);
      });
    }
    setFilteredHits(filteredHits);
  }, [hits, query]);

  return (
    <div>
      <h3>Filtrar</h3>
      <section>
        <form>
          <input
            type="search"
            name="query"
            value={query}
            onChange={handleChange}
            ref={searchEl}
          />
        </form>
      </section>
      <ul>
        {filteredHits.map((v) => (
          <li key={v.id}>{v.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Datos
