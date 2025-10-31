
export default function SearchBar({searchText, setSearchText}) {
    
return (
    <div id = "movieSearchBar">
        <input type = "search" id = "mySearchInput" 
            placeholder = "Search for a movie..." value = {searchText}
            onChange = {(e) => setSearchText(e.target.value)}>
        </input>
    </div>
);

}