

export async function getMergeRequests(gitlab) {
  const self = await gitlab.Users.current();

  const mergeRequestsSimple = await gitlab.MergeRequests.all({
    state: 'opened',
    scope: 'all',
    order_by: 'updated_at',
    sort: 'desc',
  });

  const mergeRequests = await Promise.all(mergeRequestsSimple.map(async mr => {
    const participants = await gitlab.MergeRequests.participants(
      mr.project_id, mr.iid,
    );

    const includesMe = [mr.author, ...participants]
      .map(person => person.username)
      .includes(self.username);

    return {
      ...mr,
      includesMe,
      participants,
    };
  }));

  return mergeRequests;
}
