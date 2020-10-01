import { Gitlab } from '@gitbeaker/browser';

const QUERY_KEY = 'config';
const LOCAL_STORAGE_KEY = 'humodz:my-merge-requests:config';


export async function validateCredentials(host, token) {
  const api = new Gitlab({ host, token });

  try {
    await api.Users.current();
    return { ok: true };
  } catch (error) {
    if (error.name === 'TypeError' && error.message.startsWith('NetworkError')) {
      return { ok: false, code: 'INVALID_HOST', error };
    }

    if (error.name === 'HTTPError' && error.message === 'Unauthorized') {
      return { ok: false, code: 'INVALID_TOKEN', error };
    }

    throw error;
  }
}

function tryParseJsonBase64(base64Json) {
  try {
    return JSON.parse(atob(base64Json));
  } catch (error) {
    return null;
  }
}

function stringifyJsonBase64(data) {
  return btoa(JSON.stringify(data));
}

export function getCredentials() {
  const query = new URLSearchParams(window.location.search);

  const credentialsRaw = query.get(QUERY_KEY) || localStorage.getItem(LOCAL_STORAGE_KEY);

  if (!credentialsRaw) {
    return null;
  }

  const credentials = tryParseJsonBase64(credentialsRaw);

  if (!credentials || !credentials.host || !credentials.token) {
    return null;
  }

  return {
    host: credentials.host,
    token: credentials.token,
  };
}

export function saveCredentials(credentials) {
  const credentialsRaw = stringifyJsonBase64({
    host: credentials.host,
    token: credentials.token,
  });

  // const query = new URLSearchParams(window.location.search);
  // query.set(QUERY_KEY, credentialsRaw);
  localStorage.setItem(LOCAL_STORAGE_KEY, credentialsRaw);
  // window.location.search = query.toString();
  // throw new Error('stop the world');
}

export function clearCredentials() {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  // window.location.search = '';
  // throw new Error('stop the world');
}
