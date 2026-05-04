import { useQuery } from '@tanstack/react-query';
import { contactApi } from '../api/contactApi';

export const useContact = (id) => {
  return useQuery({
    queryKey: ['contact', id],
    queryFn: () => contactApi.getOne(id),
    select: (response) => response.data.data,
    enabled: !!id,
  });
};