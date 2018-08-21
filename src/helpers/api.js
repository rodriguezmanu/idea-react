/**
 * Get headers
 * @param {String} action
 * @return {Object} headers
 */
const getHeaders = (action) => {
  const tokens = localStorage.getItem('tokens');
  const headers = {
    'Content-Type': 'application/json',
  };

  if (tokens && !action.startsWith('LOGIN')) {
    const tokenParsed = JSON.parse(tokens);
    headers['X-Access-Token'] = tokenParsed.jwt;
  }

  return headers;
};

/**
 * POST from API
 *
 * @param {String} url
 * @param {Object} body
 * @param {String} success
 * @param {String} failure
 * @param {Object} dispatch
 */
export const post = async ({
  url, body, success, failure, dispatch,
}) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: getHeaders(success),
      body: JSON.stringify(body),
    });
    const data = await res.json();
    dispatch({ type: success, data });
  } catch (e) {
    dispatch({ type: failure });
  }
};

/**
 * Delete from API
 *
 * @param {String} url
 * @param {Object} body
 * @param {String} success
 * @param {String} failure
 * @param {Object} dispatch
 */
export const remove = async ({
  url, body, success, failure, dispatch,
}) => {
  try {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: getHeaders(success),
      body: JSON.stringify(body),
    });
    const data = await res;

    dispatch({ type: success, data });
  } catch (e) {
    dispatch({ type: failure });
  }
};
