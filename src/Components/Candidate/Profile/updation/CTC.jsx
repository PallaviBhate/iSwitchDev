import React from 'react';

const CTC = () => {
  const [isCurrency, setCurrency] = React.useState('INR');

  const onValueChange = (event) => {
    setCurrency(event.target.value);
  }

  return (
    <>
      <form>
        <div class="mb-4">
          <div className="form-group">
            <div>
              <div class={isCurrency === 'INR' ? "modal-label form-check form-check-inline" : "modal-label form-check form-check-inline modal-fade"}>
                <input
                  type="radio"
                  class="form-check-input"
                  id="materialChecked2"
                  name="materialExample2"
                  value="INR"
                  checked={isCurrency === 'INR'}
                  onChange={onValueChange}
                />
                <label class="radio-inline form-check-label" for="materialChecked2">INR</label>
              </div>
              <div class={isCurrency === 'USD' ? "modal-label form-check form-check-inline" : "modal-label form-check form-check-inline modal-fade"}>
                <input
                  type="radio"
                  class="form-check-input"
                  id="materialChecked3"
                  name="materialExample3"
                  value="USD"
                  checked={isCurrency === 'USD'}
                  onChange={onValueChange}
                />
                <label class="radio-inline form-check-label" for="materialChecked3">USD</label>
              </div>
            </div>
          </div>
          <label htmlFor="University">Current Salary</label>
          <div className="form-group">
            <div class="form-row">
              <div className="col mr-4">
                <select id="University" className="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
                <label class="w-100 text-right small-text-light mt-2" htmlFor="University">Lakhs</label>
              </div>
              <div className="col  ml-4">
                <select id="University" className="form-control">
                  <option>0</option>
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                </select>
                <label class="w-100 text-right small-text-light mt-2" htmlFor="University">Thousand</label>
              </div>
            </div>
          </div>
          <label htmlFor="University">Expected Salary</label>
          <div className="form-group">
            <div class="form-row">
              <div className="col mr-4">
                <select id="University" className="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
                <label class="w-100 text-right small-text-light mt-2" htmlFor="University">Lakhs</label>
              </div>
              <div className="col ml-4">
                <select id="University" className="form-control">
                  <option>0</option>
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                </select>
                <label class="w-100 text-right small-text-light mt-2" htmlFor="University">Thousand</label>
              </div>
            </div>
          </div>
        </div>

        <button class="btn lightBlue float-right px-5">Save</button>
      </form>
    </>
  );
}
export default CTC