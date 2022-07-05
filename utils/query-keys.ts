export const PHONE_KEYS = {
  all: ['phones'] as const,
  lists: () => [...PHONE_KEYS.all, 'list'] as const,
  list: (filters: string) => [...PHONE_KEYS.lists(), { filters }] as const,
  details: () => [...PHONE_KEYS.all, 'detail'] as const,
  detail: (id: string) => [...PHONE_KEYS.details(), id] as const,
};
