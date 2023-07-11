const mapping: Record<string, string> = {
  feedbacks: 'feedback',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
