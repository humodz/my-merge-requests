import 'dotenv/config';
import { Gitlab } from '@gitbeaker/node';

interface MergeRequest {
  id: number;
  iid: number;
  project_id: number;
  title: string;
  description: string;
  web_url: string;
  author: Person;
}

interface Person {
  id: number;
  name: string;
  username: string;
  state: string;
  avatar_url: string;
  web_url: string;
}

function cast<T>(value: any): T {
  return value;
}

async function main() {
  const gitlab = new Gitlab({
    host: process.env.GITLAB_API_URL,
    token: process.env.GITLAB_API_TOKEN,
  });

  // const self = cast<Person>(await gitlab.Users.current());

  const mergeRequests = cast<MergeRequest[]>(await gitlab.MergeRequests.all({
    state: 'merged',
    scope: 'created_by_me',
  }));

  const mr = mergeRequests[0];

  console.log(mr);

  const participants = cast<Person[]>(await gitlab.MergeRequests.participants(
    mr.project_id, mr.iid,
  ));

  console.log(participants);

  // const projectId = mergeRequests[0].project_id;
  // const mergeRequestIid = mergeRequests[0].id;
  //
  // const result = await gitlab.MergeRequests.approvals(projectId, {mergeRequestIid});
  //
  // console.log(result);

  // const mergeRequests = cast<MergeRequest[]>(await gitlab.MergeRequests.all({
  //   state: 'opened',
  //   scope: 'all',
  // }));
  //
  // let doneCount = 0;
  //
  // const withParticipants = await Promise.all(mergeRequests.slice(0, 10).map(async mr => {

  //
  //   gitlab.MergeRequests.approvals()
  //
  //   doneCount++;
  //   console.log(doneCount, 'of', mergeRequests.length);
  //
  //   return { ...mr, participants };
  // }));
  //
  // const myMergeRequests = withParticipants.filter(mr =>
  //   [/*mr.author.username,*/ ...mr.participants.map(p => p.username)].includes('carlos.schneider'),
  // );
  //
  // console.log(JSON.stringify(withParticipants, null, 2));
}

main().catch(console.error);
