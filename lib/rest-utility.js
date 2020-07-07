// TODO: change to environment variable for easier deployment
const baseUrl = "https://yef9edawz1.execute-api.us-east-1.amazonaws.com/dev/";

const generateURlWithParameters = (endpoint, parameters) => {
  const esc = encodeURIComponent;
  const query = Object.keys(parameters)
    .map((k) => esc(k) + "=" + esc(parameters[k]))
    .join("&");

  return `${baseUrl}${endpoint}?${query}`;
};

export const post = async (endpoint, body, token, parameters) => {
  try {
    const url = parameters
      ? generateURlWithParameters(endpoint, parameters)
      : `${baseUrl}${endpoint}`;

    const headers = token
      ? {
          Accept: "application/json",
          "Content-Type": "application/json",
          Host: `${baseUrl}`,
          Origin: `${baseUrl}`,
          Authorization: "Bearer " + token,
        }
      : {
          Accept: "application/json",
          "Content-Type": "application/json",
          Host: `${baseUrl}`,
          Origin: `${baseUrl}`,
          Authorization: "none",
        };

    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    return handleResponse(response);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export const put = async (endpoint, body, token, parameters) => {
  try {
    const url = parameters
      ? generateURlWithParameters(endpoint, parameters)
      : `${baseUrl}${endpoint}`;

    const headers = token
      ? {
          Accept: "application/json",
          "Content-Type": "application/json",
          Host: `${baseUrl}`,
          Origin: `${baseUrl}`,
          Authorization: "Bearer " + token,
        }
      : {
          Accept: "application/json",
          "Content-Type": "application/json",
          Host: `${baseUrl}`,
          Origin: `${baseUrl}`,
        };

    const response = await fetch(url, {
      method: "PUT",
      headers,
      body: JSON.stringify(body),
    });
    return handleResponse(response);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export const get = async (endpoint, token, parameters) => {
  const url = parameters
    ? generateURlWithParameters(endpoint, parameters)
    : `${baseUrl}${endpoint}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Host: `${baseUrl}`,
      Origin: `${baseUrl}`,
      Authorization: "Bearer " + token,
    },
  });

  return await handleResponse(response);
};

export const _delete = async (endpoint, token, parameters) => {
  const url = parameters
    ? generateURlWithParameters(endpoint, parameters)
    : `${baseUrl}${endpoint}`;

  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Host: `${baseUrl}`,
      Origin: `${baseUrl}`,
      Authorization: "Bearer " + token,
    },
  });

  const data = await response.json();

  return data;
};

const handleResponse = async (response) => {
  if (response.status === 200) {
    const value = await response.json();
    return value;
  }

  if (response.status === 500) {
    const message = "SERVER ERROR";
    throw new Error(message);
  } else {
    const json = await response.json();
    const message = json.message;
    throw new Error(message);
  }
};
