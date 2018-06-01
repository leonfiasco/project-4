import React from 'react';


const PlayerForm = ({ handleChange, handleSubmit }) => {
  // const formInvalid = Object.keys(errors).some(key => errors[key]);

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <div className="control">
            <input id="name" name="name" className="input" type="text" placeholder="Name" onChange={handleChange} ></input>
          </div>
        </div>
        <div className="field">
          <label htmlFor="position">Position</label>
          <div className="control">
            <div className="select">
              <select name="name">
                <option>Select Position</option>
                <option>Point Guard (PG)</option>
                <option>Shooting Guard (SG)</option>
                <option>Small Forward (SF)</option>
                <option>Power Forward (PF)</option>
                <option>Center (C)</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label htmlFor="label">Level</label>
          <div className="control">
            <div className="select">
              <select name="level">
                <option>Experience Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Competitive</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label htmlFor="D.O>B">D.O.B</label>
          <div className="control">
            <input id="dob" name="dob" className="input" type="date" placeholder="Tel" onChange={handleChange} ></input>
          </div>
        </div>

        <div className="field">
          <label htmlFor="Tel">Tel</label>
          <div className="control">
            <input id="tel" name="tel" className="input" type="text" placeholder="Tel" onChange={handleChange} ></input>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>

  );
};

export default PlayerForm;
