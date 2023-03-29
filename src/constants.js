export const MOCK_SERVER_BASE_URL = 'http://localhost:8080';

export const API_URL = process.env.REACT_APP_USE_MOCK === 'true' ? MOCK_SERVER_BASE_URL : process.env.REACT_APP_API_URL;
