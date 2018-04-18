
import request from '../utils/request';

export async function query() {
  return request('/api/users');
}

export async function remove(params) {
  return request('/api/users', {
    method: 'post',
    body: JSON.stringify(params),
  });
}
