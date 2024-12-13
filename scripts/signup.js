
  const commonFields = `
      
      <input type="text" id="first-name" name="first-name"  placeholder="First name" required>
      <input type="text" id="last-name" name="last-name"  placeholder="Last name" required>
      <input type="text" id="id" name="id"  placeholder="ID number"  required>
      <select id="department" name="department" required>
    <option value="">Select Department</option>
    <option value="bsn">BSN</option>
    <option value="ccs">CCS</option>
    <option value="cet">CET</option>
</select>
      <input type="email" id="email" name="email"  placeholder="Email" required>
      <input type="password" id="password" name="password" placeholder="Password" required>
  `;

  const outsiderFields = `


  <input type="text" id="first-name" name="first-name"  placeholder="First name" required>
  <input type="text" id="last-name" name="last-name"  placeholder="Last name" required>
    <input type="email" id="email" name="email"  placeholder="Email" required>
      <input type="password" id="password" name="password" placeholder="Password" required>

      <input type="text" id="organization" name="organization" placeholder="Organization" required>
      <textarea id="purpose" name="purpose" rows="3" placeholder="Purpose of Registration" required></textarea>

  `;

  function updateFormFields() {
      const role = document.getElementById('role').value;
      const dynamicFields = document.getElementById('dynamic-fields');

      // Clear the existing fields before updating
      dynamicFields.innerHTML = '';

      if (role === 'outsider') {
          dynamicFields.innerHTML = outsiderFields;
      } else {
          dynamicFields.innerHTML = commonFields;
      }
  }

  document.addEventListener('DOMContentLoaded', () => {
      updateFormFields(); // Initialize with the default role (student)
  });
