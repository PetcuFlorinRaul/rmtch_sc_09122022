"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useSetDropdown(ref) {
    const [dropdownState, setDropdownState] = (0, react_1.useState)(false);
    function toggleDropdown() {
        if (dropdownState === false) {
            setDropdownState(true);
        }
        if (dropdownState === true) {
            setDropdownState(false);
        }
    }
    function handleEvents(e) {
        if (ref) {
            if (e.target !== ref.current) {
                setDropdownState(false);
            }
            if (e.target === ref.current) {
                toggleDropdown();
                console.log('pressed');
            }
        }
    }
    (0, react_1.useEffect)(() => {
        window.addEventListener('mousedown', handleEvents);
        return () => {
            window.removeEventListener('mousedown', handleEvents);
        };
    }, [dropdownState]);
    return {
        dropdownState
    };
}
exports.default = useSetDropdown;
