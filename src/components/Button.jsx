import { useState } from "react";

const InputBox = () => {

    const [note, setNote] = useState("");
    const [event, setEvent] = useState("");

    const doNothing = () => {
        console.log("Nothing Happened");
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setEvent("Submit");
    }

    return (
        <form onSubmit={doNothing}>
            <input 
                type="text"
                placeholder="Enter your note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />
            <button onClick={doNothing}>
                Submit
            </button>
        </form>
    );
}

export default InputBox;