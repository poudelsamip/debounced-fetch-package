
# debounced-fetch

A light-weight package for debouncing fetch request.
Easily debounce your api request with just a simple function.
This package is a pure javascript package and has no any other dependencies.



## Installation

```bash
  npm install debounced-fetch
```
```bash
  yarn add debounced-fetch
```
## Usage/Examples

```javascript
import React, { useState } from "react";
import debouncedFetch from "debounced-fetch";    //import debouncedFetch
import API_URL from "./api.js;

function SearchComponent() {
  const [searchResults, setSearchResults] = useState([]);

  async function fetchData(e) {
    const searchTerm = e.target.value;
    if (searchTerm) {
      try {
                               //custom function imported from debounced-fetch
        const response = await debouncedFetch(`${API_URL}/search?q=${searchTerm}`,1000);
                                              // URL                             // DELAY IN MS
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error("Search error:", error);
      }
    } else {
      setSearchResults([]);
    }
  }

  return (
    <div>
      <input type="text" placeholder="Search..." onChange={fetchData} />
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchComponent;

```

