import React , { useState }from 'react';


const UserDetailsFrom = () => {
    debugger;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [designation, setDesignation] = useState('');
  const [submittedData, setSubmittedData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileNoChange = (event) => {
    setMobileNo(event.target.value);
  };

  const handleDesignationChange = (event) => {
    setDesignation(event.target.value);
  };
 
  const handleSubmit = (event) => {
    debugger;       
    event.preventDefault();
    if (name.trim() !== '' && email.trim() !== '' && mobileNo.trim() !== ''&& designation.trim() !== '') {
    if (isEditing) {
      const updatedData = [...submittedData];
      updatedData[editIndex] = { name, email, mobileNo, designation };
      setSubmittedData(updatedData);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setSubmittedData([...submittedData, { name, email, mobileNo, designation }]);
    }

    
    setName('');
    setEmail('');
    setMobileNo('');
    setDesignation('');
}
else {
  alert('Please filled all the details.');
}
  };

  const handleEdit = (index) => {
    debugger;
    setIsEditing(true);
    setEditIndex(index);
    const selectedRow = submittedData[index];
    setName(selectedRow.name);
    setEmail(selectedRow.email);
    setMobileNo(selectedRow.mobileNo);
    setDesignation(selectedRow.designation);
  };
        const handleDelete = (index) => {

            debugger;
            const newData = [...submittedData];
            newData.splice(index, 1);
            setSubmittedData(newData);
        };
    return (
    <div>
      <div className="login-form">
        <h2>User Details From</h2>
        <div >
          <label className="labelText">
             Name:
            <input type="text" className="inputfilled" value={name} onChange={handleNameChange} />
          </label>
          <br />
          <label className="labelText">
            Email Id:
            <input type="text" className="inputfilled"   value={email} onChange={handleEmailChange}/>
          </label>
          <br />
          <label className="labelText">
           Mobile No:
           <input type="text" className="inputfilled"  maxLength="10" value={mobileNo} onChange={handleMobileNoChange} />
          </label>
          <br />
          <label className="labelText">
           Designation:
            <input type="text" className="inputfilled"  value={designation} onChange={handleDesignationChange} />
          </label>
          <br />
          <button className="Loginbtn" type="submit" onClick={handleSubmit}>Submit</button>
        </div>
        </div>



        {
        submittedData.length > 0 && (
        <div className="user-details-container">
          <h2>Submitted Data</h2>
          <table className='submittedTable'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Designation</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.mobileNo}</td>
                  <td>{data.designation}</td>
                  <td>
                    <button className="Loginbtn" type="submit" style={{ marginRight: '5px'}} onClick={() => handleEdit(index)}>Edit</button> 
                     <button className="Loginbtn" type="submit" style={{ marginRight: '5px'}} onClick={() => handleDelete(index)}>Delete</button>
                </td>
                 </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      </div>
    );
  };
  
  export default UserDetailsFrom;