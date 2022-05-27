import React from "react";
import PropTypes from "prop-types";

const TextArea = ({ label, id, name, rows, value, onChange, error }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };

    return (
        <>
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <textarea
                name={name}
                value={value}
                onChange={handleChange}
                className={getInputClasses()}
                id={id}
                rows={`${rows}`}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </>
    );
};

TextArea.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    rows: PropTypes.number,
    error: PropTypes.string
};

export default TextArea;
