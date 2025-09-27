## **Tech Task Checklist: Authenticate → Fetch → Manipulate → Submit**

### **Step 1: Authentication**

- [ ] Identify the **auth endpoint** (e.g., `/auth`)
- [ ] Know what **input** it expects (email/password)
- [ ] Decide how to **send credentials** (body, JSON)
- [ ] Plan to **receive the token**
- [ ] Think: how will you **store/use the token** for subsequent requests?

---

### **Step 2: Fetch the data**

- [ ] Identify the **data endpoint** (e.g., `/data`)
- [ ] Decide how to **send the token** (headers: `Authorization: Bearer <token>`)
- [ ] Understand the **structure of the returned data** (array of objects, fields, etc.)
- [ ] Plan to **log the response** to verify correct data

---

### **Step 3: Manipulate the data**

- [ ] Decide **what transformation** to apply (e.g., add a new field, calculate something, filter)
- [ ] Think about **edge cases** (empty arrays, missing fields, incorrect types)
- [ ] Plan to **map over the data** or loop appropriately
- [ ] Verify manipulation with **console logs** before submitting

---

### **Step 4: Submit the data**

- [ ] Identify the **submission endpoint** (e.g., `/submit`)
- [ ] Decide the **format** to send the data (JSON, array)
- [ ] Make sure to **include any required headers** (like content-type and token if needed)
- [ ] Log the **response** to confirm success

---

### **Step 5: Testing & Verification**

- [ ] Test the **auth step alone** → make sure token is returned
- [ ] Test **data fetch** using the token
- [ ] Test **data manipulation** independently
- [ ] Test **submission** separately
- [ ] Combine steps into a **single flow**
- [ ] Confirm that **all error handling** works (wrong credentials, network failure, empty data)

---

### **Optional Practice Enhancements**

- Add **console logs at each step** for debugging
- Create **dummy data locally** to practice mapping/manipulation
- Simulate a **fake server** with Express if no real endpoints are available
- Keep **each step modular** → so you can fix problems quickly

---
