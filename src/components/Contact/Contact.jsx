import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id))
    }

    return (
        <div className={css.contactCard}>
            <p>{name}</p>
            <p>{number}</p>
            <button onClick={handleDelete} >Delete</button>
        </div>
    )
}

export default Contact;