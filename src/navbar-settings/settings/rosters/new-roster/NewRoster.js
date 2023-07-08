import { useRef } from "react";
import useFormFields from "_hooks/form-fields/useFormFields";
import useRoster from "_hooks/roster/useRoster";

import "./NewRoster.css";

import AddIcon from "_components/icon/add-icon/AddIcon";
import Icon from "_components/icon/Icon";

import convertToId from "_utils/_general/convertToId";
import { DELETE } from "_media/_general/general.assets";
import { CHECK_ICON } from "_media/settings/settings.assets";

const NewRoster = () => {
  const [input, setInput, resetInput, addInput] = useFormFields({
    name: "",
    student1: "",
  });
  const errorRef = useRef();
  const successRef = useRef();
  const [, setRosters] = useRoster();

  const studentInputs = Object.keys(input)
    .slice(1)
    .map((field, i) => (
      <div key={field} className="NewRoster-form-control">
        <input
          className="NewRoster-input"
          name={field}
          id={field}
          placeholder="STUDENT"
          value={input[field]}
          onChange={setInput}
        />
        <label className="NewRoster-label" htmlFor={field}>
          Student {i + 1}:{" "}
        </label>
      </div>
    ));

  const addStudent = (e) => {
    e.preventDefault();
    const newStudentInput = `student${Object.keys(input).length}`;
    addInput(newStudentInput);
  };

  const updateInput = (e) => {
    e.preventDefault();
    setInput(e);
    const { value } = e.target;
    const hasError = value && !value.match(/^[A-Za-z0-9\s]+$/);
    errorRef.current.textContent = hasError
      ? "Only alphanumeric characters are allowed"
      : "";
  };

  const addRoster = () => {
    if (errorRef.current.textContent) return;
    const rosterId = convertToId(input.name);
    const name = input.name;
    const students = Object.keys(input)
      .filter((field) => field.includes("student"))
      .map((student) => input[student]);
    setRosters((rosters) => ({
      ...rosters,
      [rosterId]: { name, students },
    }));
    resetInput();
    successRef.current.textContent = "Add roster successful!";
    const timer = setTimeout(() => {
      successRef.current.textContent = "";
      clearTimeout(timer);
    }, 5000);
  };

  const reset = () => resetInput();

  return (
    <section className="NewRoster">
      <aside className="NewRoster-options">
        <AddIcon text="Name" size="50px" onClick={addStudent} />
        <Icon icon={DELETE} text="Reset" size="50px" onClick={reset} />
        <Icon icon={CHECK_ICON} text="Done" size="50px" onClick={addRoster} />
      </aside>
      <aside className="NewRoster-students">
        <input
          className="NewRoster-input"
          name="name"
          id="name"
          placeholder="ROSTER NAME"
          value={input.name}
          onChange={updateInput}
        />
        <label className="NewRoster-label" htmlFor="name">
          Roster Name:{" "}
        </label>
        <p className="NewRoster-error" ref={errorRef}></p>
        {studentInputs}
        <p className="NewRoster-success" ref={successRef}></p>
      </aside>
    </section>
  );
};

export default NewRoster;
