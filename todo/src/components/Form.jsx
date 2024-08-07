function Form() {
    const handleSubmit = (event) => {
        // Prevents the form from submitting and reloading the entire app
        event.preventDefault();
        event.target.reset();
    };

    return (
        <form className="Form" onSubmit={handleSubmit}>
            <label htmlFor="todo">
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Write your next task"
                />
            </label>
            <button>
                <span className="visually-hidden">Submit</span>
                <svg>
                    <path d="" />
                </svg>
            </button>
        </form>
    );
}

export default Form;