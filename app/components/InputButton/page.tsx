

export function InputButton() {
  return (
    <div className=" justify-between">
    <button className="px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-800 transition">
      add
    </button>
    <input className="px-6 py-2 bg-white text-black rounded hover:bg-teal-100 transition" type="email" name="add mail" id="" />
    </div>
  );
}