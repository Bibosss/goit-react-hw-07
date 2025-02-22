import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css"
import { changeFilter } from "../../redux/filtersSlice";


const SearchBox = () => {

    const dispatch = useDispatch();

    return (
        <div className={css.searchBoxDiv}>
            <p>Find contacts by name or number</p>
            <input onChange={(e) => dispatch(changeFilter(e.target.value))} type="text" className={css.searchBoxInp} />
        </div>
    )
}

export default SearchBox;