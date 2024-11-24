import { Input } from "postcss";

export default function NavBar(){
    return (
        <nav>
            <a href="/">Home</a>
            <input type="text" id="search-bar"/>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={search}></button>
        </nav>
    );
}

function search(){
    var searchBar: HTMLInputElement = document.getElementById("search-bar") as HTMLInputElement;
    var input = searchBar.value;
    console.log(input);
}