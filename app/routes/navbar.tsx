import { Input } from "postcss";

export default function NavBar(){
    return (
        <nav>
            <a href="/">Home</a>
            <input type="text" id="search-bar"/>
            <button className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-full shadow m-1.5" onClick={search}>Find</button>
        </nav>
    );
}

function search(){
    var searchBar: HTMLInputElement = document.getElementById("search-bar") as HTMLInputElement;
    var input = searchBar.value;
    console.log(input);
}