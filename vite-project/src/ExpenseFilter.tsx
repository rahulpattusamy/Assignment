interface Props{
    onSelectcategory:(category:string)=>void
}

const ExpenseFilter = ({onSelectcategory}:Props) => {
  return (
    <>
    <select  className="form-select" onChange={(event)=>onSelectcategory(event.target.value)} >
       <option value="">All categories</option>
       <option value="Skincare">Skincare</option>
       <option value="Gym">Gym</option>
       <option value="Studymaterial">Studymaterial</option>
    </select>
    </>
  )
}

export default ExpenseFilter