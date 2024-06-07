import axios from 'axios';

class ApiHelper {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL: baseURL,
    });
  }

  // Helper function for error handling
  handleError(error, message) {
    console.error(`${message}: `, error.message);
    throw new Error(message);
  }

  async addFlat(flatData) {
    try {
      await this.api.post('/flats', flatData);
    } catch (error) {
      this.handleError(error, 'Error adding flat');
    }
  }

  async updateFlat(flatId, flatData) {
    try {
      await this.api.put(`/flats/${flatId}`, flatData);
    } catch (error) {
      this.handleError(error, 'Error updating flat');
    }
  }

  async deleteFlat(flatId) {
    try {
      await this.api.delete(`/flats/${flatId}`);
    } catch (error) {
      this.handleError(error, 'Error deleting flat');
    }
  }

  async findFlats(filters = {}) {
    try {
      const response = await this.api.get('/flats', { params: filters });
      return response.data;
    } catch (error) {
      this.handleError(error, 'Error finding flats');
    }
  }

  async addStudent(studentData) {
    try {
      await this.api.post('/students', studentData);
    } catch (error) {
      this.handleError(error, 'Error adding student');
    }
  }

  async updateStudent(studentId, studentData) {
    try {
      await this.api.put(`/students/${studentId}`, studentData);
    } catch (error) {
      this.handleError(error, 'Error updating student');
    }
  }

  async deleteStudent(studentId) {
    try {
      await this.api.delete(`/students/${studentId}`);
    } catch (error) {
      this.handleError(error, 'Error deleting student');
    }
  }

  async findStudents(filters = {}) {
    try {
      const response = await this.api.get('/students', { params: filters });
      return response.data;
    } catch (error) {
      this.handleError(error, 'Error finding students');
    }
  }

  async assignStudentToFlat(studentId, flatId) {
    try {
      await this.api.post(`/flats/${flatId}/assignStudent`, { studentId });
    } catch (error) {
      this.handleError(error, 'Error assigning student to flat');
    }
  }

  async trackStudentDetailsForFlatOwner(flatId) {
    try {
      const response = await this.api.get(`/flats/${flatId}/students`);
      return response.data;
    } catch (error) {
      this.handleError(error, 'Error tracking student details for flat owner');
    }
  }
}

export default ApiHelper;
