import axios from 'axios';
import util from 'util';
import MockAdapter from 'axios-mock-adapter';
import ApiHelper from '../ApiCallhelper/CallHelper.js'; 

const mockAxios = new MockAdapter(axios);
const baseURL = 'https://api.example.com';
const accessToken = 'your-access-token-here';
const apiHelper = new ApiHelper(baseURL, accessToken);


function runTest(testName, testFunction) {
  try {
    testFunction();
    console.log(`${testName} passed`);
  } catch (error) {
    console.error(`${testName} failed: ${error.message}`);
  }
}
// Test for addFlat
runTest('addFlat', () => {
  const flatData = { name: 'Flat A', address: '123 Main St' };
  const expectedResponse = { id: '1', "name": "Flat A", "address": "123 Main St" };

  mockAxios.onPost('/flats').reply(200, expectedResponse);

  apiHelper.addFlat(flatData).then(() => {
    const requestData = JSON.parse(JSON.stringify(mockAxios.history.post[0].data));
    if (!util.isDeepStrictEqual(requestData, flatData)) {
      throw new Error(`Expected request data to be ${JSON.stringify(flatData)}, but got ${JSON.stringify(requestData)}`);
    }
  });
});
// Test for findFlats
runTest('findFlats', () => {
  const filters = { city: 'New York' };
  const expectedFlatList = [
    { id: '1', name: 'Flat A', address: '123 Main St' },
    { id: '2', name: 'Flat B', address: '456 Elm St' },
  ];

  mockAxios.onGet('/flats', { params: filters }).reply(200, expectedFlatList);

  apiHelper.findFlats(filters).then((flatList) => {
    if (JSON.stringify(flatList) !== JSON.stringify(expectedFlatList)) {
      throw new Error(`Expected flat list to be ${JSON.stringify(expectedFlatList)}, but got ${JSON.stringify(flatList)}`);
    }

    const requestParams = mockAxios.history.get[0].params;
    if (JSON.stringify(requestParams) !== JSON.stringify(filters)) {
      throw new Error(`Expected request params to be ${JSON.stringify(filters)}, but got ${JSON.stringify(requestParams)}`);
    }
  });
});

// Test for error handling
runTest('deleteFlat error handling', () => {
  const expectedError = 'Error deleting flat';
  mockAxios.onDelete('/flats/123').reply(500);

  apiHelper.deleteFlat('123').catch((error) => {
    if (error.message !== expectedError) {
      throw new Error(`Expected error message to be "${expectedError}", but got "${error.message}"`);
    }
  });
});
