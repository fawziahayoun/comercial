import { Children } from "react";
import { selectIsLoadding } from "../../redux/slice/Slice";
import { Selector, useSelector } from "react-redux";
export default function HeadingLogOut  ({Children}) {
    const isLoadding = useSelector(selectIsLoadding);
    if(isLoadding){
        return Children
    }

    return null ;

    


};
