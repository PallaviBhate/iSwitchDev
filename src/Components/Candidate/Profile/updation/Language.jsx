import React from 'react';

const Language = () => {
  const [isLanguageKnown, setLanguageKnown] = React.useState('read');

  const onValueChange = (event) => {
    setLanguageKnown(event.target.value);
  }
  return (
    <>
      <form>
        <div class="mb-4">
          <div className="form-group">
            <label htmlFor="University">Language</label>
            <select id="University" className="form-control">
              <option>Select Language</option>
              <option>Hindi</option>
              <option>English</option>
              <option>Spanish</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="University">Proficiency</label>
            <select id="University" className="form-control">
              <option>Select Proficiency</option>
              <option>Expert</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          <div class="form-group">
            <div class="form-row">
              <div className="col-3">
                <div class="custom-control custom-checkbox mr-sm-2">
                  <input type="checkbox"
                    class="custom-control-input"
                    id="customControlAutosizing"
                    value="read"
                    checked={isLanguageKnown === 'read'}
                    onChange={onValueChange}
                  />
                  <label class="custom-control-label" for="customControlAutosizing">Read</label>
                </div>
              </div>
              <div className="col-3">
                <div class="custom-control custom-checkbox mr-sm-2">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customControlAutosizing1"
                    value="write"
                    checked={isLanguageKnown === 'write'}
                    onChange={onValueChange}
                  />
                  <label class="custom-control-label" for="customControlAutosizing1">Write</label>
                </div>
              </div>
              <div className="col-3">
                <div class="custom-control custom-checkbox mr-sm-2">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customControlAutosizing2"
                    value="speak"
                    checked={isLanguageKnown === 'speak'}
                    onChange={onValueChange}
                  />
                  <label class="custom-control-label" for="customControlAutosizing2">Speak</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="btn lightBlue float-right px-5">Save</button>
      </form>
    </>
  );
}

export default Language