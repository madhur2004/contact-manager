import { useMutation, useQueryClient } from '@tanstack/react-query';
import { contactApi } from '../api/contactApi';
import toast from 'react-hot-toast';

export const useUpdateContact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => contactApi.update(id, data),
    onSuccess: (response, variables) => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
      queryClient.invalidateQueries({ queryKey: ['contact', variables.id] });
      toast.success(response.data.message);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to update contact');
    },
  });
};