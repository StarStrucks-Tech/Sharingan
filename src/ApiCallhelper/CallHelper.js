import axios from 'axios';

class ApiHelper {
  constructor(baseURL, accessToken) {
    this.api = axios.create({
      baseURL: baseURL,
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
  }

  /**
   * Helper function for error handling.
   * @param {Error} error - The error object.
   * @param {string} message - Custom error message.
   */
  handleError(error, message) {
    console.error(`${message}: `, error.message);
    throw new Error(message);
  }

  /**
   * Add a new flat.
   * @param {Object} flatData - Data of the flat to be added.
   * @throws Will throw an error if the request fails.
   */
  async addFlat(flatData) {
    try {
      await this.api.post('/flats', flatData);
    } catch (error) {
      this.handleError(error, 'Error adding flat');
    }
  }

  /**
   * Update an existing flat.
   * @param {string} flatId - ID of the flat to be updated.
   * @param {Object} flatData - New data for the flat.
   * @throws Will throw an error if the request fails.
   */
  async updateFlat(flatId, flatData) {
    try {
      await this.api.put(`/flats/${flatId}`, flatData);
    } catch (error) {
      this.handleError(error, 'Error updating flat');
    }
  }

  /**
   * Delete a flat.
   * @param {string} flatId - ID of the flat to be deleted.
   * @throws Will throw an error if the request fails.
   */
  async deleteFlat(flatId) {
    try {
      await this.api.delete(`/flats/${flatId}`);
    } catch (error) {
      this.handleError(error, 'Error deleting flat');
    }
  }

  /**
   * Find flats based on filters.
   * @param {Object} [filters={}] - Filters to apply to the search.
   * @returns {Promise<Object[]>} - A promise that resolves to an array of flats.
   * @throws Will throw an error if the request fails.
   */
  async findFlats(filters = {}) {
    try {
      const response = await this.api.get('/flats', { params: filters });
      return response.data;
    } catch (error) {
      this.handleError(error, 'Error finding flats');
    }
  }

  /**
   * Add a new student.
   * @param {Object} studentData - Data of the student to be added.
   * @throws Will throw an error if the request fails.
   */
  async addStudent(studentData) {
    try {
      await this.api.post('/students', studentData);
    } catch (error) {
      this.handleError(error, 'Error adding student');
    }
  }

  /**
   * Update an existing student.
   * @param {string} studentId - ID of the student to be updated.
   * @param {Object} studentData - New data for the student.
   * @throws Will throw an error if the request fails.
   */
  async updateStudent(studentId, studentData) {
    try {
      await this.api.put(`/students/${studentId}`, studentData);
    } catch (error) {
      this.handleError(error, 'Error updating student');
    }
  }

  /**
   * Delete a student.
   * @param {string} studentId - ID of the student to be deleted.
   * @throws Will throw an error if the request fails.
   */
  async deleteStudent(studentId) {
    try {
      await this.api.delete(`/students/${studentId}`);
    } catch (error) {
      this.handleError(error, 'Error deleting student');
    }
  }

  /**
   * Find students based on filters.
   * @param {Object} [filters={}] - Filters to apply to the search.
   * @returns {Promise<Object[]>} - A promise that resolves to an array of students.
   * @throws Will throw an error if the request fails.
   */
  async findStudents(filters = {}) {
    try {
      const response = await this.api.get('/students', { params: filters });
      return response.data;
    } catch (error) {
      this.handleError(error, 'Error finding students');
    }
  }

  /**
   * Assign a student to a flat.
   * @param {string} studentId - ID of the student to be assigned.
   * @param {string} flatId - ID of the flat to assign the student to.
   * @throws Will throw an error if the request fails.
   */
  async assignStudentToFlat(studentId, flatId) {
    try {
      await this.api.post(`/flats/${flatId}/assignStudent`, { studentId });
    } catch (error) {
      this.handleError(error, 'Error assigning student to flat');
    }
  }

  /**
   * Track student details for a flat owner.
   * @param {string} flatId - ID of the flat.
   * @returns {Promise<Object[]>} - A promise that resolves to an array of students.
   * @throws Will throw an error if the request fails.
   */
  async trackStudentDetailsForFlatOwner(flatId) {
    try {
      const response = await this.api.get(`/flats/${flatId}/students`);
      return response.data;
    } catch (error) {
      this.handleError(error, 'Error tracking student details for flat owner');
    }
  }

  /**
   * POST /private-apis
   * Create a new private API.
   * @param {Object} apiData - Data of the private API to be created.
   * @throws Will throw an error if the request fails.
   */
  async postPrivateApi(apiData) {
    try {
      await this.api.post('/private-apis', apiData);
    } catch (error) {
      this.handleError(error, 'Error creating private API');
    }
  }

  /**
   * GET /private-apis/:apiId
   * Retrieve a private API by ID.
   * @param {string} apiId - ID of the private API to retrieve.
   * @returns {Promise<Object>} - A promise that resolves to the private API data.
   * @throws Will throw an error if the request fails.
   */
  async getPrivateApi(apiId) {
    try {
      const response = await this.api.get(`/private-apis/${apiId}`);
      return response.data;
    } catch (error) {
      this.handleError(error, 'Error getting private API');
    }
  }

  /**
   * PUT /private-apis/:apiId
   * Update an existing private API.
   * @param {string} apiId - ID of the private API to be updated.
   * @param {Object} apiData - New data for the private API.
   * @throws Will throw an error if the request fails.
   */
  async putPrivateApi(apiId, apiData) {
    try {
      await this.api.put(`/private-apis/${apiId}`, apiData);
    } catch (error) {
      this.handleError(error, 'Error updating private API');
    }
  }

  /**
   * PATCH /private-apis/:apiId
   * Partially update an existing private API.
   * @param {string} apiId - ID of the private API to be partially updated.
   * @param {Object} apiData - New data for the private API (partial).
   * @throws Will throw an error if the request fails.
   */
  async patchPrivateApi(apiId, apiData) {
    try {
      await this.api.patch(`/private-apis/${apiId}`, apiData);
    } catch (error) {
      this.handleError(error, 'Error partially updating private API');
    }
  }
/**
   * DELETE /private-apis/:apiId
   * Delete a private API.
   * @param {string} apiId - ID of the private API to be deleted.
   * @throws Will throw an error if the request fails.
   */
async deletePrivateApi(apiId) {
  try {
    await this.api.delete(`/private-apis/${apiId}`);
  } catch (error) {
    this.handleError(error, 'Error deleting private API');
  }
}

/**
 * GET /private-apis
 * Find private APIs based on filters.
 * @param {Object} [filters={}] - Filters to apply to the search.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of private APIs.
 * @throws Will throw an error if the request fails.
 */
async getPrivateApis(filters = {}) {
  try {
    const response = await this.api.get('/private-apis', { params: filters });
    return response.data;
  } catch (error) {
    this.handleError(error, 'Error finding private APIs');
  }
}
}

export default ApiHelper;