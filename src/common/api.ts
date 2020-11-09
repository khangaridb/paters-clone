// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper

export async function client(endpoint: string, { body, ...customConfig }: { body?: any; customConfig?: any } = {}) {
  const headers = { 'Content-Type': 'application/json' };

  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...(customConfig as any).headers,
    },
  };

  if (body) {
    (config as any).body = JSON.stringify(body);
  }

  let data;
  try {
    const response = await window.fetch(endpoint, config);
    data = await response.json();
    if (response.ok) {
      return data;
    }
    throw new Error(response.statusText);
  } catch (err) {
    return Promise.reject(err.message ? err.message : data);
  }
}

client.get = function (endpoint: string, customConfig = {}) {
  return client(endpoint, { ...customConfig });
};

client.post = function (endpoint: string, body: any, customConfig = {}) {
  return client(endpoint, { ...customConfig, body });
};
