import { useEffect, useState } from "react";

export default function useSetDropdown(ref: React.RefObject<HTMLDivElement>) {

    const [dropdownState, setDropdownState] = useState<boolean>(false);

    function toggleDropdown() {
        if(dropdownState === false) {
            setDropdownState(true)
        }
        if(dropdownState === true) {
            setDropdownState(false)
        }
    }

    function handleEvents(e: MouseEvent) {
        
        if(ref) {
            if(e.target !== ref.current) {
                setDropdownState(false)
            }
            if(e.target === ref.current) {
                toggleDropdown()
        console.log('pressed');

            }
        }
    }

    useEffect(() => {
        window.addEventListener('mousedown', handleEvents)
        return () => {
            window.removeEventListener('mousedown', handleEvents)
        } 
    }, [dropdownState])

    return {
        dropdownState
    }

}