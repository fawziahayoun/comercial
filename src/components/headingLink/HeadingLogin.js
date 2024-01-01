import { Children } from "react";
import { selectIsLoadding } from "../../redux/slice/Slice";
import {  useSelector } from "react-redux";
export default function HeadingLogin  ({Children}) {
    const isLoadding = useSelector(selectIsLoadding);
    if(!isLoadding){
        return Children
    }

    return null ;

    


};
