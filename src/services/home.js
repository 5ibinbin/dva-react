/**
 * @author Nickyzhang
 * @date 2018/4/18
 * @description file templates
 */
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
