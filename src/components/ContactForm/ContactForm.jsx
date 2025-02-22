import { Field, Form, Formik } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css"
import { useDispatch } from "react-redux";

import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer } from "react-toastify";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
    const FeedbackSchema = Yup.object().shape({
        username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        tel: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid format (e.g., 111-11-11)").min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    })

    const usernameID = useId();
    const numberID = useId();

    const initialValues = {
        username: "",
        tel: "",
    };
    const dispatch = useDispatch();

    const handleAdd = (values, actions) => {
        dispatch(addContact({ name: values.username, number: values.tel }))
        actions.resetForm();
    }

    return (
        <div>
            <ToastContainer />
            <Formik initialValues={initialValues} onSubmit={handleAdd} validationSchema={FeedbackSchema} >
                <Form className={css.formCss}>
                    <label htmlFor={usernameID}>Name</label>
                    <Field id={usernameID} className={css.inputField} type="text" name="username" placeholder="Enter name" />
                    <ErrorMessage className={css.errorMes} name="username" component="span" />

                    <label htmlFor={numberID}>Number</label>
                    <Field className={css.inputField} type="tel" name="tel" id={numberID} component={({ field, }) => (
                        <input
                            {...field}
                            className={css.inputField}
                            placeholder="xxx-xx-xx"
                        />
                    )} />
                    <ErrorMessage className={css.errorMes} name="tel" component="span" />
                    
                    <div className={css.divButton} >
                        <button className={css.button} type="submit" >Add contact</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default ContactForm;