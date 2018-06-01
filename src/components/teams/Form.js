import React from 'react';
import AutoComplete from '../common/AutoComplete';

const TeamForm = ({ handleChange, handlePlaceChange, handleSubmit, team, errors }) => {
  // We want to check if there's a truthy value in the value of the error itself.
  const formInvalid = Object.keys(errors).some(key => errors[key]);
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        {/* `htmlFor` is used for the purpose of escaping `for` (as in for loop) in JS */}
        <label htmlFor="name">Name</label>
        <input id="name" name="name" className="input" placeholder="Name" onChange={handleChange} value={team.name || ''}/>
        {errors.name && <small>{errors.name}</small>}
      </div>
      <div className="field">
        <label htmlFor="image">Image</label>
        <input id="image" name="image" className="input" placeholder="Image" onChange={handleChange} value={team.image || ''}/>
        {errors.image && <small>{errors.image}</small>}
      </div>
      <div className="field">
        <label htmlFor="address">Address</label>
        <AutoComplete id="address" name="address" placeholder="Address" className="input" value={team.address || ''} handlePlaceChange={handlePlaceChange}/>
        {errors.address && <small>{errors.address}</small>}

      </div>
      <button disabled={formInvalid} className="button is-primary">Submit</button>
    </form>
  );
};

export default TeamForm;
