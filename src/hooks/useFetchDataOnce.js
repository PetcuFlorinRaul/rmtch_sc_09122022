"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useFetchDataOnce(url) {
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [data, setData] = (0, react_1.useState)();
    function getData(url) {
        return __awaiter(this, void 0, void 0, function* () {
            setLoading(true);
            yield fetch(url)
                .then((res) => {
                return res.json();
            })
                .then((result) => {
                setData(result);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            })
                .catch(err => {
                setLoading(false);
                throw new Error(err);
            });
        });
    }
    (0, react_1.useEffect)(() => {
        getData(url);
    }, []);
    return {
        data,
        loading
    };
}
exports.default = useFetchDataOnce;
