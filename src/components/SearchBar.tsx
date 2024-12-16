"use client"

import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRef } from "react";

const SearchBar = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    return(
        <div className="relative w-full h-14 flex flex-col bg-white">
            <div className="relative h-14 z-10 rounded-md">
                <Input ref={inputRef} className="absolute inset-0 h-full" onKeyDown={(e) => {
                    if(e.key === "Escape"){
                        inputRef?.current?.blur();
                    } 
                }}/>
                
                <Button className="absolute right-0 inset-y-0 h-full rounded-l-none"><Search className="h-6 w-6"/></Button>
            </div>
        </div>
    )
}

export default SearchBar;