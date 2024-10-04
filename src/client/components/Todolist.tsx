import Form from "./Form";
import List from "./List";

function Todolist() {
  return (
    <div className="bg-mblue-200 w-[600px] py-16 px-8 rounded-xl max-h-[755px] z-10">
      <Form />
      <List />
    </div>
  );
}

export default Todolist;
