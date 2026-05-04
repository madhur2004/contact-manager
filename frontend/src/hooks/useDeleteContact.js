import { useMutation, useQueryClient } from '@tanstack/react-query';
import { contactApi } from '../api/contactApi';
import toast from 'react-hot-toast';

export const useDeleteContact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => contactApi.delete(id),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
      toast.success(response.data.message);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to delete contact');
    },
  });
};