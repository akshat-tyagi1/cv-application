function GeneralInfoForm({ generalInfo, setGeneralInfo }) {
  return (
    <div>
      <div className="form-field">
        <label htmlFor="">Name</label>
        <input
          id=""
          type="text"
          value={generalInfo.name}
          onChange={(e) =>
            setGeneralInfo({
              ...generalInfo,
              name: e.target.value,
            })
          }
        />
      </div>

      <div className="form-field">
        <label htmlFor="">Mail</label>
        <input
          id=""
          type="text"
          value={generalInfo.email}
          onChange={(e) =>
            setGeneralInfo({
              ...generalInfo,
              email: e.target.value,
            })
          }
        />
      </div>

      <div className="form-field">
        <label htmlFor="">Contact Number</label>
        <input
          id=""
          type="text"
          value={generalInfo.contactNumber}
          onChange={(e) =>
            setGeneralInfo({
              ...generalInfo,
              contactNumber: e.target.value,
            })
          }
        />
      </div>

      <div className="form-field">
        <label htmlFor="">Location</label>
        <input
          id=""
          type="text"
          value={generalInfo.location}
          onChange={(e) =>
            setGeneralInfo({
              ...generalInfo,
              location: e.target.value,
            })
          }
        />
      </div>

      <div className="form-field">
        <label htmlFor="">linkedin</label>
        <input
          id=""
          type="text"
          value={generalInfo.linkedin}
          onChange={(e) =>
            setGeneralInfo({
              ...generalInfo,
              linkedin: e.target.value,
            })
          }
        />
      </div>

      <div className="form-field">
        <label htmlFor="">Github</label>
        <input
          id=""
          type="text"
          value={generalInfo.github}
          onChange={(e) =>
            setGeneralInfo({
              ...generalInfo,
              github: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
}

export default GeneralInfoForm;
