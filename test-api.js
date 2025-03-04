const axios = require('axios');

const testTemplateAPI = async () => {
  try {
    // Test Template1 Pages endpoint
    const template1Response = await axios.get('http://localhost:1337/api/template1s?populate=*');
    console.log('\n=== Template 1 Pages ===');
    console.log('Status:', template1Response.status);
    console.log('Data structure:', JSON.stringify(template1Response.data, null, 2));

    // Test Template2 Pages endpoint
    const template2Response = await axios.get('http://localhost:1337/api/template2s?populate=*');
    console.log('\n=== Template 2 Pages ===');
    console.log('Status:', template2Response.status);
    console.log('Data structure:', JSON.stringify(template2Response.data, null, 2));

    // Test Template3 Pages endpoint
    const template3Response = await axios.get('http://localhost:1337/api/template3s?populate=*');
    console.log('\n=== Template 3 Pages ===');
    console.log('Status:', template3Response.status);
    console.log('Data structure:', JSON.stringify(template3Response.data, null, 2));

  } catch (error) {
    console.error('Error testing API:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
  }
};

testTemplateAPI();
