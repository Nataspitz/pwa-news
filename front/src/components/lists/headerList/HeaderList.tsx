import { useContext } from "react";
import { StyleHeaderList } from "../../header/StyleHeaderList";
import { NewsContext } from "../../../providers/NewsContext";


export function HeaderList() {
    const { getNewsBySubject } = useContext(NewsContext)

    return (
        <StyleHeaderList>
            <li>
                <button onClick={() => getNewsBySubject("world")}>World</button>
            </li>
            <li>
                <button onClick={() => getNewsBySubject("economy")}>Economy</button>
            </li>
            <li>
                <button onClick={() => getNewsBySubject("Technology")}>Technology</button>
            </li>
        </StyleHeaderList>
    )
}