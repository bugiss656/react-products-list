

const NumberInput = ({ labelText, value, onChange }) => {
    return (
        <> 
            <label htmlFor="number-input" className="form-label">{labelText}</label>
            <input type="number" min={0} className="form-control" id="number-input" value={value} onChange={onChange} />
        </>
    )
}

export default NumberInput