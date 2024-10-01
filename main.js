function addPatient(event) {
    event.preventDefault(); // Prevent form submission for now

    // Get input values
    const patientName = document.querySelector('input[name="patient_name"]').value;
    const age = document.querySelector('input[name="age"]').value;
    const condition = document.querySelector('input[name="condition"]').value;

    // Create a new div to display the patient data
    const patientInfo = document.createElement('div');
    patientInfo.classList.add('patientInfo');
    patientInfo.textContent = `Patient: ${patientName} - Age: ${age} - Condition: ${condition}`;

    // Append the patient info to the patient list section
    const patientList = document.getElementById('patientList');
    patientList.appendChild(patientInfo);
}

function runTestCases() {
    // Simulate multiple patients for testing
    const testResults = document.getElementById('testResults');
    let testOutput = '';

    for (let i = 1; i <= 3; i++) {
        const testPatientData = {
            patient_name: prompt(`Enter name for TestPatient${i}`),
            age: prompt(`Enter age for TestPatient${i}`),
            condition: prompt(`Enter condition for TestPatient${i}`)
        };
        console.log(testPatientData);
        testOutput += `Test ${i}: ${JSON.stringify(testPatientData)}<br>`;
    }

    testResults.innerHTML = testOutput;
}
