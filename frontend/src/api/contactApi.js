import axiosInstance from './axiosInstance';

export const contactApi = {
  getAll: (params) => axiosInstance.get('/contacts', { params }),
  getOne: (id) => axiosInstance.get(`/contacts/${id}`),
  create: (data) => axiosInstance.post('/contacts', data),
  update: (id, data) => axiosInstance.put(`/contacts/${id}`, data),
  delete: (id) => axiosInstance.delete(`/contacts/${id}`),
};