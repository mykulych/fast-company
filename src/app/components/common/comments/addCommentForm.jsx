import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SelectField from "../form/selectField";
import TextArea from "../form/textArea";
import { validator } from "../../../utils/validator";

const AddCommentForm = ({ onSubmit, users }) => {
    const [data, setData] = useState({ userId: "", content: "" });
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        onSubmit(data);
        setData({ userId: "", content: "" });
    };

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        userId: {
            isRequired: {
                message: "field is required"
            }
        },
        content: {
            isRequired: {
                message: "field is required"
            }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    return (
        <div>
            <h2>New comment</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <SelectField
                        options={users}
                        name="userId"
                        defaultOption="Выберите пользователя"
                        value={data.userId}
                        onChange={handleChange}
                        error={errors.userId}
                    />
                </div>
                <div className="mb-4">
                    <TextArea
                        id="content"
                        label="Сообщение"
                        rows={3}
                        name="content"
                        value={data.content}
                        onChange={handleChange}
                        error={errors.content}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Добавить коментарий
                </button>
            </form>
        </div>
    );
};

AddCommentForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
};

export default AddCommentForm;
