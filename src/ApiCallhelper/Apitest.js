import ApiHelper from '../ApiCallhelper/CallHelper.js';

const apiHelper = new ApiHelper('https://jsonplaceholder.typicode.com');

const runTests = async () => {
  try {
    // Add a flat
    const flatData = { name: 'Flat B', location: 'City Y', price: 1500, amenities: ['Gym', 'Pool'] };
    await apiHelper.addFlat(flatData);
    console.log('Flat added successfully');

    // Update a flat
    const flatId = '1'; // Replace with an actual ID from your database
    const updatedFlatData = { price: 1200 };
    await apiHelper.updateFlat(flatId, updatedFlatData);
    console.log('Flat updated successfully');

    // Delete a flat
    await apiHelper.deleteFlat(flatId);
    console.log('Flat deleted successfully');

    // Find flats
    const flats = await apiHelper.findFlats({ location: 'City X' });
    console.log('Flats found:', flats);

    // Add a student
    const studentData = { name: 'Jane Doe', age: 22, gender: 'Female' };
    await apiHelper.addStudent(studentData);
    console.log('Student added successfully');

    // Update a student
    const studentId = '1'; // Replace with an actual ID from your database
    const updatedStudentData = { age: 21 };
    await apiHelper.updateStudent(studentId, updatedStudentData);
    console.log('Student updated successfully');

    // Delete a student
    await apiHelper.deleteStudent(studentId);
    console.log('Student deleted successfully');

    // Find students
    const students = await apiHelper.findStudents({ gender: 'Male' });
    console.log('Students found:', students);

    // Assign student to flat
    await apiHelper.assignStudentToFlat(studentId, flatId);
    console.log('Student assigned to flat successfully');

    // Track student details for flat owner
    const studentDetails = await apiHelper.trackStudentDetailsForFlatOwner(flatId);
    console.log('Student details for flat owner:', studentDetails);
  } catch (error) {
    console.error('Test failed:', error.message);
  }
};

runTests();
