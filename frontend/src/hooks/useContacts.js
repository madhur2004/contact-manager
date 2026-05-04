import { useQuery } from '@tanstack/react-query';
import { contactApi } from '../api/contactApi';

export const useContacts = (page = 1, limit = 10, search = '') => {
  return useQuery({
    queryKey: ['contacts', page, limit, search],
    queryFn: () => contactApi.getAll({ page, limit, search }),
    select: (response) => ({
      contacts: response.data.data.contacts,
      pagination: response.data.data.pagination,
    }),
    staleTime: 5000,
  });
};